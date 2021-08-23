import User from "./models/User";
import bcrypt from "bcrypt";

const err = [];

export const home = async (req, res) => {
    return res.render("home");
};

export const getJoin = (req, res) => {
    return res.render("join");
};

export const postJoin = async (req, res) => {
    const { name, username, password, password2 } = req.body;

    // name이 db에 이미 존재하는가, (존재하면 에러 메시지를 배열에 추가)
    const user = await User.findOne({ name: name });
    if (user) {
        err.push("User Already Exist!");
        // console.log(err);
        // return res.end();
    } 

    // password와 password2는 일치하는가, (불일치 시 에러 메시지를 배열에 추가)
    if (password !== password2) {
        err.push("Password does not match!");
    } 

    /* 
    password가 db에 이미 존재하는가 검증하고, (존재하면 에러 메시지를 배열에 추가) -> 각 user의 pw 자체는 중복되어도 상관 없음
    if (user.password === password) {
        console.log("password already exist!");
        err.push("Password Already Exist!");        
    }
    */

    // 에러 메시지 배열을 join.pug에 return하고,
    // (문제 없으면) User DB에 생성하고, login.pug로 return    
    if (err.length !== 0) { // name 존재 여부, password 일치 여부 체크 후에 배열이 비워지지 않아서, 올바른 값 입력 시에도 else로 넘어가지 않는데, 이를 해결하려면?
        return res.render("join", {err});
    } else {
        await User.create({
            name,
            username,
            password
        })
        return res.render("login");
    }

};

export const getLogin = (req, res) => {

};

export const postLogin = async (req, res) => {

};

export const logout = (req, res) => {

};