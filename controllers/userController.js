const postSignup = (req,res)=>{
    res.json({
        Message : "user"
    })
};

const postSignin = (req,res)=>{
    res.json({
        Message : "user"
    })
}

const purchases = (req,res)=>{
    res.json({
        Message : "user"
    })
}

module.exports = {
    postSignup,
    postSignin,
    purchases
}