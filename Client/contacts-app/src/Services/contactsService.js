import axios from "./axiosInstance";

// API Call to get all contacts.
async function getContacts(){
    const contacts = await axios.get('/user/contacts');
    return contacts.data;
}

export {getContacts}