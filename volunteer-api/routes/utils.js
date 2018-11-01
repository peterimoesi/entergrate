module.exports = function checkAuth(req, res, next) {
    console.log(req.session.auth);
    if (!req.session || !req.session.auth) {
        res.sendStatus(401);
        return;
    }

    next();
};
