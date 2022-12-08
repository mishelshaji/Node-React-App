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

module.exports.create = async (req, res) => {
    const id = req.user.id;
    const {firstName, lastName, email, phone, dob, address} = req.body;
    try{
        const contact = await Contact.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            dob: dob,
            address: address,
            userId: id
        });
        return res.json(new ResponseModel(contact));
    }
    catch(err){
        console.log(err);
        res.status(500).json(new ResponseModel(null, null, ['Unable to create contact.']));
    }
}