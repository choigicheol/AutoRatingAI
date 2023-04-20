const express = require("express");
const router = express.Router();
const { Review } = require("../models");
const axios = require("axios");
require("dotenv").config();

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() + 1).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

const question =
  "너가 한 음식점을 방문한 소비자라고 생각하고 다음에 알려주는 리뷰에 대해 너라면 1점이상 5점이하의 점수중에 몇점을 내렸을지 궁금해 형식은 점수:n점, 이유:~입니다 라고 말해줘 리뷰는";

// 음슴체 변환하기 (추가예정)
const transfer = { 임: "입니다", 음: "어", 슴: "습니다" };

const getTransMessage = (message) => {
  const textArr = message.split(" ");
  return textArr
    .map((word) => {
      const lastWord = word.charAt(word.length - 1);
      if (transfer[lastWord]) {
        return word.replace(lastWord, transfer[lastWord]);
      } else return word;
    })
    .join(" ");
};

// Review POST 요청 처리
router.post("/", async (req, res) => {
  try {
    const { storeId, userName, comment } = req.body;
    const date = getDate();

    const transMessage = getTransMessage(comment);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question + transMessage }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    if (response.data) {
      if (response.data.choices) {
        const ratingString = response.data.choices[0].message.content;
        const rating = Number(ratingString.match(/\d/)[0]);
        const review = await Review.create({
          storeId,
          userName,
          comment,
          rating,
          date,
        });
        res.status(201).json(review);
      }
    }
  } catch (error) {
    console.error(error);
  }

  // console.log(storeId, userName, comment, rating, date);
  // Review 모델을 사용하여 review 생성
});

router.get("/", async (req, res) => {
  const { storeId } = req.query;

  try {
    const reviews = await Review.findAll({
      where: {
        storeId: parseInt(storeId),
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
