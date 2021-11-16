
const { json } = require('express');
const express = require('express');

const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

//app.use("/route", express.static(""));




app.use('/public', express.static('public'));

app.use(express.urlencoded({extended:true}))
app.use(express(json));

app.use('/', require('./router'));

app.listen(5000, () => {
    console.log("Servidor inicado na porta 5000: http://localhost:5000");
});