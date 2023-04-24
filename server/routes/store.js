const express = require("express");
const router = express.Router();
const { Store, Review } = require("../models");

router.get("/", async (req, res) => {
  const { uuid } = req.query;
  try {
    const store = await Store.findOne({
      where: {
        uuid: parseInt(uuid),
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (store === null) {
      return res.status(204).send("No Content");
    }

    const reviews = await Review.findAll({
      where: {
        storeId: parseInt(uuid),
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    store.dataValues.reviews = reviews.reverse();
    res.json(store);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { store } = req.body;
    // Store 모델에 새로운 데이터 생성
    const newStore = await Store.create({
      uuid: store.uuid,
      name: store.name,
      imagePath: store.imagePath,
      address: store.address,
      type: store.type,
      subName: store.subName,
      x: store.x,
      y: store.y,
      phone: store.phone,
    });

    res.status(201).json(newStore);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
