const User = require('../models/user');

// Example: Register user
exports.register = async (req, res) => {
  try {
    // Logic for registering a user
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Example: Login user
exports.login = async (req, res) => {
  try {
    // Logic for user login
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.name = async (req,res)=>{
    try {
        res.json({message: "Hey, Taha here!"})
    } catch (error){
        res.status(500).json({message: error.message});
    }
};