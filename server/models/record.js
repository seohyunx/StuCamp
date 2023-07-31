const Sequelize = require("sequelize");

module.exports = class Record extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        record_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true,
        },
        record_detail_id: {
          type: Sequelize.BIGINT,
        },
        user_id: {
          type: Sequelize.BIGINT,
        },
        record_date: {
          type: Sequelize.DataTypes.DATE,
        },
      },
      {
        sequelize, // models/index -> user 연결
        timestamps: true, // true -> createdAt, updateAt
        modelName: "Record", // 프로젝트(node) 에서 사용하는 모델 이름
        tableName: "record", // 실제 DB 테이블 이름
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // db.User.hasMany(db.Board, { foreignKey: "id", sourceKey: "id" }); // 1:N
    // db.User.hasOne ... 1:1
    // db.User.belongsToMany ... N : M
    // foreignKey는 foreignKey지정만 하는거고
    //데이터 가져올때는 sourceKey로 인해 가져온다.
  }
};
