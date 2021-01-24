const controller = require('../controller/mainController');


function allRoutes(app) {

    app.get('/', controller().index);

    app.post('/search', controller().search);

    app.get('/about', controller().about);

}

module.exports = allRoutes;