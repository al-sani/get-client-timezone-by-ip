const express = require('express')
const app = express()
const port = process.env.PORT || 3030
const requestIP = require('request-ip');
const axios = require('axios');
const API_KEY = 'b0fad41bb6ee4d0fbcf7fd4f35bcc397';
const URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + API_KEY;

const sendAPIRequest = async (ipAddress) => {
    const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
    // const apiResponse = await axios.get(URL);
    return apiResponse.data;
}

app.get('/', async (req, res) => {
    const ipAddress = requestIP.getClientIp(req);;
    const ipAddressInformation = await sendAPIRequest(ipAddress);
    res.send({ip:ipAddress, data:ipAddressInformation})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} , ${process.env.PORT}`)
})