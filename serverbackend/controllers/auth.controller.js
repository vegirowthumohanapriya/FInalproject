const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const saltRounds = 10;
//  200 - Success
// 404- Not Found
// 400 - Error
// 500 - Network Error

exports.signup = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const exists = await User.findOne({ userId });
    if (exists !== null) {
      return res.send({ message: "User already exist" });
    } else {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) {
          console.log(err);
          return res.json({ status: "Failed" });
        }
        const data = await User.create({
          userId,
          password: hash,
        });
        res.json({
          status: "Success",
          data,
        });
      });
    }
  } catch (error) {
    res.status(400 || 500).send(error || "internal error");
  }
};

exports.signin = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await User.findOne({ userId: userId });
    if (!user) {
      res.json({ message: "No user exist" });
    } else {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          console.log(err);
          res.json({ status: "Failed" });
        }
        if (result) {
          const token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              _id: user._id,
            },
            process.env.JWT_SECRET
          );
          res.json({
            status: "Success",
            token: token,
          });
        } else {
          res.json({
            status: "Failed",
            message: "Invalid Credentials",
          });
        }
      });
    }
  } catch (error) {
    res.status(400 || 500).send(error || "internal error");
  }
};
