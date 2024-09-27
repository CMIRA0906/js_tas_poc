const axios = require("axios");
const { SUT_URL } = require("../config/endpoints")

const sendRequest = async(path,data = null, method = "get") =>{
    try {
        const response =  await axios({
            method,
            url:`${SUT_URL}/${path}`,
            headers:{},
            data
        });
        return{
            status : response.status,
            data: response.data
        };
    } catch (error) {
        return{
            status :error.response
        }; 
    }

};

module.exports ={
    sendRequest
};