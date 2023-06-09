const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
const storeRouter = require("./routes/store");
const reviewRouter = require("./routes/review");

const corsOption = {
  Headers: { "content-type": "application/json" },
  origin: true,
  credentials: true,
  method: ["post", "get", "put", "patch", "delete", "options"],
};

const app = express();
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./"));

const sequelize = new Sequelize("AutoRatingAI", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

// 데이터베이스 연결
sequelize
  .authenticate()
  .then(() => console.log("데이터베이스 연결 성공!"))
  .catch((error) => console.error("데이터베이스 연결 실패: ", error));

// 서버 시작
app.listen(80, () => {
  console.log(`서버 시작`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.use("/store", storeRouter);
app.use("/review", reviewRouter);
