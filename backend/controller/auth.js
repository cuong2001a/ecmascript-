import User from '../models/auth';
import jwt from "jsonwebtoken";
const expressJwt = require('express-jwt')
export const signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: ' Email da duoc su dung'
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json(user)
    })
}
export const signin = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Không tồn tại user"
            })
        } else if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Tài khoản mật khẩu không đúng"
            })
        } else {
            const token = jwt.sign({ _id: user._id }, 'dsakjdldsajdja');
            res.cookie('t', token, { expire: new Date() + 9999 });
            const { _id, name, email, role } = user;
            return res.json({
                token,
                user: { _id, email, name, role }
            })
        }

    })
}
export const signout = async (req, res) => {
    
    res.clearCookie('t');
    //  res.redirect('/signin');
    res.json({
        message: "Signout Success"
    })
}
export const requireSignin = expressJwt({
    // secret: process.env.JWT_SECRET,
    secret: 'dsakjdldsajdja',
    algorithms: ["HS256"],
    userProperty: "auth",
});
export const isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next();
}
export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(403).json({
            error: "Admin resource! Access Denied"
        })
    }
    next();
}