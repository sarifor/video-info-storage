import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedUser = req.session.user;
    res.locals.loggedIn = req.session.loggedIn;
    next();
};

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
    // region: "",
});

export const upload = multer({ 
    // dest: 'uploads/',
    storage: multerS3({
        s3: s3,
        bucket: "stforme210903",
    })
});
