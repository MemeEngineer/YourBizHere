const User = require("../../models/User");
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
};
