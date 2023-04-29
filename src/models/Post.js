/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    post: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    timePost: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('now'),
    },
    userId: {
      allowNull: true,
      type: DataTypes.NUMBER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      }
    },

  },{
    tableName: 'Posts',
    underscored: true,
    timestamps: false,
  });
  return Post;
};