import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedUser = req.session.user;
    res.locals.loggedIn = req.session.loggedIn;
    next();
};

export const upload = multer({ dest: 'uploads/' });
