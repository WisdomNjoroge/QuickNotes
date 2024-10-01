import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));


export default sequelize;