const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);

    //create a new token
    const token = createJWT(user);

    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function update(req, res){
  // const {id} = req.params
  // console.log(req.body)
  try{
    console.log(req.user)
    const dbUser = await User.findById(req.user._id)
    console.log('OLD password',dbUser)
    //matching old password with password in db
    const match = await bcrypt.compare(req.body.password, dbUser.password)
    
if(!match){
  console.log('USER', req.body)
  res.status(400).json("Password Error")
  return
}else{
  req.body.password = await bcrypt.hash(req.body.newpassword, 6)
   delete req.body.newpassword
   console.log('USER', req.body)
}
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true})

    res.json(user)
    
  }catch(error){
    console.log(error)
  }
}
async function deleteUser(req, res){
  
  try{

    const user = await User.findByIdAndDelete(req.user._id)

    
     res.json('user deleted')
  }catch(e){
    console.log(e)
  }
}


async function login(req, res) {
  try {
    // find a user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();

    // comparing password
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();

    // create new token
    const token = createJWT(user);
    res.json(token);

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

 async function checkToken(req, res){
  //req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp)
}

//helper function to create a jwt token
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

module.exports = {
  create,
  login,
  checkToken,
  update,
  deleteUser,
};
