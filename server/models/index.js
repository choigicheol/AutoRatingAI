const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("AutoRatingAI", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

const Store = sequelize.define(
  "store",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    x: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    y: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "store" }
);

const Review = sequelize.define(
  "review",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "review" }
);

Review.belongsTo(Store, { foreignKey: "storeId" });
Store.hasMany(Review, { foreignKey: "storeId" });

module.exports = {
  sequelize,
  Store,
  Review,
};
