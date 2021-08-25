export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = false;
    
    // console.log("middlewares.js");
    // console.log(req.session.user);
    // console.log(res.locals.loggedIn);
    next();
};