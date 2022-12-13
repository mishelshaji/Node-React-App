import axios from "./axios"

const getAll = async ()=>{
    var response = await axios.get('/user/contacts');
    return response.data;
}

export {getAll}