module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
        resultsOne: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        resultsOneDes: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        resultsTwo: {
            type: DataTypes.STRING,

        },
        resultsTwoDes: {
            type: DataTypes.STRING,

        },
        resultsThree: {
            type: DataTypes.STRING,

        },
        resultsThreeDes: {
            type: DataTypes.STRING,

        }

    });
    return Post;
};