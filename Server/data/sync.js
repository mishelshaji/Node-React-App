const {User, Contact} = require('./models');

// Sync models with database.
User.sync({alter: true});
Contact.sync({alter: true});