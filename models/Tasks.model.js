module.exports = (sequelize, Sequelize) => {
    const Tasks = sequelize.define('Tasks', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Tasks;
};