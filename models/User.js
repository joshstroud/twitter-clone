'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Tweet, { as: 'tweets' });
      User.hasMany(models.Follow, { as: 'followerFollows' });
      User.hasMany(models.Follow, { as: 'followingFollows', foreignKey: 'follower_id' });

      // User.belongsToMany(models.User, { 
      //   through: models.Follow, 
      //   targetKey: 'user_id',
      //   sourceKey: 'follower_id',
      //   as: 'followers'});
      // User.belongsToMany(models.User, {
      //   through: models.Follow,
      //   sourceKey: 'follower_id',
      //   targetKey: 'user_id',
      //   as: 'followedUsers'
      // });
    }
  };
  User.init({
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    handle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.TEXT,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    indexes: [
      {
        unique: true,
        fields: ['email']
      },
      {
        unique: true,
        fields: ['handle']
      }
    ]
  });
  return User;
};