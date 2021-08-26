export const localsMiddleware = (req, res, next) => {
    res.locals.user = req.session.user;
    console.log(res.locals.user);
    res.locals.loggedIn = req.session.loggedIn;
    next();
};