exports.checkAuth = function(req, res, next) {
    console.log(
        req.session,
        !req.session &&
            (!req.session.auth &&
                (!req.session.passport || !req.session.passport.user))
    );
    if (
        !req.session &&
        (!req.session.auth &&
            (!req.session.passport || !req.session.passport.user))
    ) {
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
