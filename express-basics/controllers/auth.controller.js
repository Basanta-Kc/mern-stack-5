const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constants");

const signUp = async (req, res) => {
  // throw new Error("test")
  // req.body = {name, email, password}
  // req.boyd.name
  // user.name.father.name
  const userExist = await User.findOne({
    email: req.body.email,
  });

  if (userExist) {
    res.status(400).json({
      message: "User already exist. Plz sign in.",
    });
    return;
  }
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  await User.create({
    email: req.body.email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "Signed Up succesfully.",
  });
};

const signIn = async (req, res) => {
  // we can send directly req.body in findOne
  // but we need to make sure only those two fields are
  // coming from the frontend. (we need to validate as well )
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    res.status(400).json({
      message: "Invalid Credentials",
    });
    return;
  }

  const isPasswordCorrect = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (isPasswordCorrect) {
    // const { npassword, ...remainingUser } = user
    // delete user.password
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        roles: user.roles,
      },
      JWT_SECRET,
      { expiresIn: "10d" }
    );

    res.status(200).json({
      message: "Signed In succesfully.",
      token,
    });
    return;
  }

  res.status(400).json({
    message: "Invalid Credentials",
  });
};

module.exports = {
  signUp,
  signIn,
};

// signin => succes => token (123456)
// post: /poroduct => token check => main function
