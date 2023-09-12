const User = require('../../models/User')
const jwt = require('jsonwebtoken')

async function create(req,res){

    try{

        // Add the user to the database
        const user = await User.create(req.body)
        const token = createJWT(user)
        
        res.json(token)
    }catch(error){
        console.log(error)
        res.status(400).json(error)
    }
    
}

function createJWT(user){
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}

module.exports = {
    create
}