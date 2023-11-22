const express = require('express')
var ipInfo = require("ip-info-finder");
const app = express()
const port = process.env.PORT || 3030
const IP = require('ip');
const axios = require('axios');
const API_KEY = 'b0fad41bb6ee4d0fbcf7fd4f35bcc397';
const URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + API_KEY;

const sendAPIRequest = async (ipAddress) => {
    const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
    return apiResponse.data;
}

app.get('/', async (req, res) => {
    const ipAddress = IP.address();
    const ipAddressInformation = await sendAPIRequest(ipAddress);
    res.send(ipAddressInformation)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} , ${process.env.PORT}`)
})