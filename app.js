const express = require('express');
const axios = require('axios');
const myAPIkey = "c9254300-544f-11ec-afc6-75865f49995f"
let count = 0;

// express defined to app
const app = express();

// set view engine
app.set('view engine', 'ejs');

//public access
app.use("/public", express.static('public'));

// route
app.get("/", (req, res) => {
    res.cookie("count", count++);


    console.log(req.body);

    let currency = "";

    axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=${myAPIkey}`, {
            params: {
                base_currency: `${currency}`
            }
        })
        .then((response) => {

            let currencies = Object.keys(response.data.data);

            res.render("index",{currencies});
        })
        .catch((err) => {
            console.log(err)
        })
    res.render("index");
})

app.post("/", (req, res) => {
    console.log(req.body);
})
// server
app.listen(process.env.PORT || 5000, () => {

    console.log("server working...");
})