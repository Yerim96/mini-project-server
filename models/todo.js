const todo = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "todo", //squelize에서 쓰는 이름이기 때문에 꼭 테이블 이름과 같지 않아도됨.(모델이름)
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //not null
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "todo", //실제 db 테이블
      freezeTableName: true, //복수화를 막기위해 테이블 얼리기.
      timestamps: false,
    }
  );
  return model;
};

module.exports = todo; //todo 내보내기
