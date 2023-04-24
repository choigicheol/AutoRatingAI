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

// 음슴체 변환하기 (추가예정)
const transfer = { 임: "입니다", 음: "어", 슴: "습니다", 남: "납니다" };

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

    // const question = `너는 음식점 소비자야 너는 가게에 다음과같은 리뷰를 남겼어 ${transMessage} 이 리뷰의 의미를 모르겠으면 점수없이 모르겠습니다 라고만 말해 의미를 알겠으면 - 점수는 1점이상 5점이하중에 몇점을 줬을까? 점수 : 몇점, 이유: ~입니다 라고 대답해봐`;
    // const question = `음식점 리뷰 : ${transMessage}. 방금 말한 음식점 리뷰 문장에서 긍정적, 부정적 요소를 파악하고 별점형식으로 1점이상 5점이하 중에 하나만 골라줘. 의미를 모르겠으면 모르겠습니다 라고 말해. `;
    const question = `자, "${transMessage}" 해당 문장에서 긍정적, 부정적 요소를 파악하고 별점형식으로 1점이상 5점이하 중에 하나만 골라봐. 의미를 모르겠으면 "모르겠습니다" 라고 말해.`;
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
        console.log(response.data.choices[0].message.content);
        if (ratingString.match(/\d/) === null) res.send(400);
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
    res.status(400);
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
