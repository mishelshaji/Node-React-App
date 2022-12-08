const express = require('express');
const contacts = require('./controllers/contactsController');

const router = express.Router();
router.get('/contacts', contacts.getAll);

module.exports = router;