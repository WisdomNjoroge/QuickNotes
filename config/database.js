import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('mysql', 'root', '4216', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));


export default sequelize;