const {Sequelize, DataTypes} = require('sequelize');

// Create instance of sequalize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Pass@123',
    database: 'nodecontactsapp'
});

// Define user model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    role: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'user'
    }
});

// Define contact model
const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },

    phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },

    dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },

    address: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

// Create associations
User.hasMany(Contact, {
    foreignKey: 'userId',
    sourceKey: 'id'
});
Contact.belongsTo(User, {
    foreignKey: 'userId',
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id'
});

module.exports.User = User;
module.exports.Contact = Contact;