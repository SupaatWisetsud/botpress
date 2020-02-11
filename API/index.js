const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/api/temp", async (req, res) => {
    await axios.get("http://api.openweathermap.org/data/2.5/weather?q=Buriram,TH&APPID=8efa2195cd4a7f31779eebab3943035f")
    .then(result => {
        res.json({
            temp: parseInt(result.data.main.temp) - 273
        });
    })
});

app.post("/api/detail", (req, res) => {
    console.log(req.body);
    res.json({status : "success"});
});

app.listen(4000, console.log("API is running.. port : 4000"));