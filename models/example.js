module.exports = function(sequelize, DataTypes) {
    var feeling = sequelize.define("feeling", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return feeling;
  };