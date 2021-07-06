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
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      this.belongsTo(models.User, { foreignKey: 'follower_id', as: 'follower' });

    }
  };
  Follow.init({
    user_id: {
      type: DataTypes.INTEGER,
      unique: 'followUnique'
    },
    follower_id: {
      type: DataTypes.INTEGER,
      unique: 'followUnique'
    }
  }, {
    sequelize,
    modelName: 'Follow',
    underscored: true
  });
  return Follow;
};