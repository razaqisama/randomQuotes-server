'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Quote.init({
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Quote required'
        }
      }
    },
    quotee: DataTypes.STRING,
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Category Required'
        }
      }
    }
  }, {
    sequelize,
    hooks:{
      beforeCreate(model, option){
        if(!model.quotee) {
          model.quotee = 'Unknown';
        }
      }
    },
    modelName: 'Quote',
  });
  return Quote;
};