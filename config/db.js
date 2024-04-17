const Sequelize = require('sequelize');

const sequelize = new Sequelize('zithara', 'root', 'Sai1202@1996', {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));


module.exports = sequelize;