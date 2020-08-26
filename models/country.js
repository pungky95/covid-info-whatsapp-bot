'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    'Country',
    {
      code: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING(255)
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      slug: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  Country.associate = function(models) {
    // associations can be defined here
  };
  return Country;
};
