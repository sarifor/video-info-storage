export const localsMiddleware = (req, res, next) => {
    res.locals.LoggedUser = req.session.user;
    res.locals.loggedIn = req.session.loggedIn;
    next();
};