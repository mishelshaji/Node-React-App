import axios from "./axiosInstance";

// API Call to register a new user.
async function register(data){
    return await axios.post('/register', data);
}

// API call to login a new user.
async function login(data){
    var response = await axios.post('/login', data);
    return response.data;
}

export {register, login}