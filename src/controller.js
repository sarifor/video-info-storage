import fs from "fs";
// import multer from "multer";

export const home = (req, res) => {
    res.render("home", {pageTitle: "home"});
}

export const read = (req, res) => {
    
    // home.pug에 txt파일 올리면, MiddleWare에서 multer가 XX처리 해준 걸,
    const file = req.file;

    // 받아서, 다시 home.pug로 보냄
    fs.readFile(file, 'utf-8', function(err, data) {
        console.log(data);
    });

    res.render("home", { pageTitle: "read", file });
    // res.render("home", {pageTitle: "read"});
}