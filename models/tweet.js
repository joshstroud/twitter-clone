'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'fuser' });
      this.belongsTo(models.User, { foreignKey: 'follower_id', as: 'follower' });

    }
  };
  Follow.init({
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    follower_id: DataTypes.INTEGER
    }, {
    sequelize,
    modelName: 'Follow',
  });
  return Follow;
};