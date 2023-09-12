

function create(req,res){
    res.json({
        user:{
            name: req.body.name,
            email: req.body.email,
        }
    })
}

module.exports = {
    create
}