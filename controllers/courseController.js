const postPurchase = (req,res)=>{
    res.json({
        message : "course purchase endpoint"
    })
};


const getPurchases = (req,res)=>{
    res.json({
        Message : "user"
    })
}

module.exports = {
    postPurchase,
    getPurchases
}