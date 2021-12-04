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
                currencies
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

    console.log(currValue)

    axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=${myAPIkey}`, {
            params: {
                base_currency: `${from}`
            }
        })
        .then((response) => {

            let currencies = response.data.data;

            let asArray = Object.entries(currencies);

            let deneme = asArray.filter(([key, value]) => {
                if (key == to) {
                    console.log(`adı=${key} - value=${value}`);
                    return calculate(currValue, value);
                }
                
            })
            console.log(deneme)

            //let newScore = Object.fromEntries(isTOEqualToAPI);
            //console.log(newScore)
        })
        .catch((error) => {
            console.log(error)
        })

})


// server
app.listen(process.env.PORT || 5000, () => {

    console.log("server working...");
})