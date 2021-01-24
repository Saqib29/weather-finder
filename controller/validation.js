function validation(req, res, next) {
    if(req.body.search){
        return next();
    }

    return  res.render('index', { weather : null, validate : false });
}

module.exports = validation;