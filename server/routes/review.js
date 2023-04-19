const express = require("express");
const router = express.Router();
const { Review } = require("../models");
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;
require("dotenv").config();

const configuration = new Configuration({
  organization: "org-N5YhVJchrFKSEZu1kn1CQPsu",
  apiKey: process.env.API_KEY,
});

const question =
  "너는 미식가야 내가 처음 말해주는 음식점 리뷰를 보고 너가 썼다고 생각하고 너라면 1점부터 5점까지 중에 몇점을 줬을지 'n점' '이유는 ~입니다' 이라는 형식으로만 말해줘 자 새로운 리뷰 말해줄게";

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
        console.log(ratingString);
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
