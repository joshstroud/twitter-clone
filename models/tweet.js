'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  };
  Tweet.init({
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER
    }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};