
function mainController(){
    return{
        index(req, res) {
            return res.render('index');
        }
    }
}

module.exports = mainController;