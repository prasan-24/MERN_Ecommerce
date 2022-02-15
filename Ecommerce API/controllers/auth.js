const User = require('../models/user');
const jwt = require('jsonwebtoken'); // to generate signed token
const expressjwt = require('express-jwt'); // for authorization check
const { errorHandler } = require('../helpers/dbErrorHandler');


const JWE_Token = 'hdfsdhjvfsdg';

exports.signup = (req,res) =>{
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            console.log(err);
            return res.status(400).json({
                err:errorHandler(err)
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        })
    })
}

exports.signin = (req,res) =>{
    // find the user based on email

    const {email,password} = req.body;

    User.findOne({email},(err,user)=>{
        if(err || !user) {
            return res.status(400).json({
                err: 'User with that email does not exist. Please signup'
            });
        }

        // if user is found make sure the email and password match 
        // create authenticate method in modal

        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and password don't match"
            })
        }

        const token = jwt.sign({_id:user._id},JWE_Token)

        // persist the tocken in cookie with expiry date 

        res.cookie('t',token,{expire: new Date() + 9999})

        const {_id,name,email,role} = user;

        return res.json({token,user:{_id,email,name,role}});

    })

}

exports.signout = (req,res)=>{
    res.clearCookie('t');
    res.json({message: 'Sign out successful'});
}

exports.requireSignin = expressjwt({
    secret: JWE_Token,
    userProperty: 'auth',
    algorithms: ["HS256"]
})

exports.isAuth = (req,res,next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id
    if(!user) {
        return res.status(403).json({
            error: 'Access Denied'
        })
    }
    next();
}

exports.isAdmin = (req,res,next)=>{
    if(req.profile.role == 0){
        return res.status(403).json({
            error: 'Admin resource! access denied'
        })
    }
    next();
}