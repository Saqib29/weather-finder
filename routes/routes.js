const controller = require('../controller/mainController');
const validate   = require('../controller/validation');

function allRoutes(app) {

    app.get('/', controller().index);

    app.post('/search', validate, controller().search);

    app.get('/about', controller().about);

}

module.exports = allRoutes;