const express = require("express");
const router = express.Router();
const { Review } = require("../models");
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
  organization: "org-N5YhVJchrFKSEZu1kn1CQPsu",
  apiKey: process.env.API_KEY,
});

const question =
  "다음의 음식점 리뷰를 보고 너가 별점을 준다고 생각하고 1점이상 5점이하 중에 'n점' 이라는 형식으로만 말해줘 자 이제 리뷰 말해줄게";

const openai = new OpenAIApi(configuration);

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() + 1).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

// Review POST 요청 처리
router.post("/", async (req, res) => {
  try {
    const { storeId, userName, comment } = req.body;
    const date = getDate();
    console.log("before openAI");
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question + comment,
      max_tokens: 2048,
      temperature: 0.7,
    });
    console.log("After openAI");
    if (response.data) {
      if (response.data.choices) {
        const ratingString = response.data.choices[0].text;
        const rating = Number(ratingString.match(/\d/)[0]);
        console.log(storeId, userName, comment, rating, date);
        // Review 모델을 사용하여 review 생성
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
    res.status(500).json({ error: "Error creating review" });
  }
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
