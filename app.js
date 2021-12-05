const express = require('express');
const axios = require('axios');
let calculate = require('./public/js/calculate');
const myAPIkey = "c9254300-544f-11ec-afc6-75865f49995f";

// express defined to app
const app = express();

// set view engine
app.set('view engine', 'ejs');

//public access
app.use("/public", express.static('public'));

//json
app.use(
    express.urlencoded({
        extended: true
    })
)

// route
app.get("/", (req, res) => {

    axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=${myAPIkey}`)
        .then((response) => {

            let currencies = Object.keys(response.data.data);

            res.render("index", {
                currencies,sum:"0"
            });
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post("/", (req, res) => {
    console.log(req.body);
    console.log("üstteki post işleminden");

    let {
        currValue,
        from,
        to
    } = req.body;

    console.log("miktar= " + currValue)

    axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=${myAPIkey}`, {
            params: {
                base_currency: `${from}`
            }
        })
        .then((response) => {

            let allCurrencies = Object.entries(response.data.data);

            let currenciesForEJS = Object.keys(response.data.data);

            //let asArrayOfCurrencies = Object.entries(currencies);

            //console.log(Object.fromEntries(isTOEqualToAPI))
            //let newScore = Object.fromEntries(isTOEqualToAPI);
            //console.log(newScore)

            for ([key, value] of allCurrencies) {
                if (key == to) {
                    console.log(`to = ${key} - price = ${value}`);

                    let sum = calculate(currValue, value);

                    console.log(`sum = ${sum}`);

                    let currencies = currenciesForEJS;

                    res.render("index", {currencies, sum})
                }
            }
        })
        .catch((error) => {
            console.log(error)
        })

    //res.render("index",{sum})
})


// server
app.listen(process.env.PORT || 8080, () => {

    console.log("server working...");
})