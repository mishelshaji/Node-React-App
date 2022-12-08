const {Contact} = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');

// Get all contacts.
module.exports.getAll = async (req, res) => {
    const id = req.user.id;
    const contacts = await Contact.findAll({
        where: {userId: id}
    });
    res.json(new ResponseModel(contacts));
}