import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/database.js';


const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STTRING,
        allowNull: false
    }
});

export default User;