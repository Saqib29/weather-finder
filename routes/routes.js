const constroller = require('../controller/mainController');


function allRoutes(app) {

    app.get('/', constroller().index);

    app.post('/search', (req, res) => {
        console.log(req.body);
    });

}

module.exports = allRoutes;