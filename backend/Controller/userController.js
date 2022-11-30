const catchAsyncError = require("../middleWare/catchAsyncError");
const User = require("../models/User");
const bcrypt = require("bcrypt")


exports.registerUser = catchAsyncError( async (req, res, next) =>{

    const {name , email, password, number} = req.body;

    if( !password || !number  ){
        return res.status(204).json({
            success : false,
            error:`Please enter your valid details`,
        })
    }

    const userMatch = await User.findOne({email: email})

    if( userMatch ){
        return res.status(400).json({
            success : false,
            error:`User already registered`,
        })
    }

    const user = await User.create({name , email, password, number});

    const token = user.getJsonWebToken()

    res.status(201).cookie("iStore", token).json({
        success : true,
        message:`user created successfully`,
        user,
        token
    })
});


exports.loginUser = catchAsyncError( async (req, res, next)=> {

    const { email, password} = req.body;

    const user = await User.findOne({email: email})

    if( !user ){
        return res.status(401).json({
            success : false,
            error:`please enter valid email or password`,
        })
    }

    const passwordMatched = await bcrypt.compare(password, user.password)

    if( ! passwordMatched ){
        return res.status(401).json({
            success : false,
            error:`please enter valid number or password`,
        })
    }
    const token = await user.getJsonWebToken()
    console.log(token)

    res.status(200).cookie("iStore", token).json({
        success : true,
        message:`user successfully login`,
        token
    })
})
