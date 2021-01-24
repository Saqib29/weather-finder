const express = require('express');
const ejs     = require('ejs');
const app = express();

const PORT = process.env.PORT || 3000;

// Set middlewares
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended : false }));
app.use(express.json());

// fetch routes
require('./routes/routes')(app);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});