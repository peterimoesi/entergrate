exports.checkAuth = function(req, res, next) {
    if (!req.session || !req.session.auth) {
        console.log('false');
        res.sendStatus(401);
        return;
    }
    next();
};

exports.checkAdminAuth = function(req, res, next) {
    if (!req.session || !req.session.auth || !req.session.admin) {
        res.sendStatus(401);
        return;
    }

    next();
};
