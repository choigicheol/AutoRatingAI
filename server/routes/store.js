const express = require("express");
const router = express.Router();
const { Store, Review } = require("../models");

// store 정보 가져오기
router.get("/menuType", async (req, res) => {
  const { type } = req.query;
  try {
    const stores = await Store.findAll({
      where: {
        type: type,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/info", async (req, res) => {
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

    const store = await Store.findOne({
      where: {
        id: parseInt(storeId),
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    store.dataValues.reviews = reviews;
    res.json(store);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
