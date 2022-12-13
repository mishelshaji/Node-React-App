const express = require('express');
const contacts = require('./controllers/contactsController');

const router = express.Router();
router.get('/contacts', contacts.getAll);
router.post('/contacts', contacts.create);
router.get('/contacts/:id', contacts.getOne);

module.exports = router;