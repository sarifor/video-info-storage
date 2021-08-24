export const localsMiddleware = (req, res, next) => {
    res.locals.loggedInUser = "";
    res.locals.loggedIn = false;
    
    console.log("middlewares.js");
    console.log(res.locals.loggedInUser);
    console.log(res.locals.loggedIn);
    next();
};