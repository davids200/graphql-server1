module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
      'Student',
      {
        userId: DataTypes.INTEGER,
        studentId: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        
      },
      {},
    );
    Student.associate = function (models) {
      // associations can be defined here
      Student.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    //  Post.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments' });
    };
    return Student;
  };
  