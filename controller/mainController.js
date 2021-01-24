const axios  = require('axios');

const API_KEY = '614292ec1c4f55c22a7de859d174f10c';

function mainController(){
    return{
        index(req, res) {
            return res.render('index', { weather : null});
        },

        search(req, res){
            const city = req.body.search;
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

            axios.get(url).then((response) => {
                res.render('index', { weather : response.data });
            }).catch(err => {
                console.log(err);
            });
        }
    }
}

module.exports = mainController;