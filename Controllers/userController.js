const User = require("../Models/userModel");

const registerUser = async (req, res) => {
  try {
    const { name, userName, email, password, confirmPassword } = req.body;

    if (!name || !userName || !email || !password || !confirmPassword) {
      return res.status(406).json({
        success: false,
        message: "please fill all the fields",
      });
    } else if (password != confirmPassword) {
      return res.status(406).json({
        message: false,
        message: "please enter correct password",
      });
    }
    const user = await User.create(req.body);
    //   console.log(user)

    if (user) {
      res.json(201).json({
        success: true,
        message: "user registered successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });
    // console.log(user)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "email and password are incorrect",
      });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "email and password are incorrect",
      });
    }

    const token = user.getJWTToken();

    res.cookie("token", token).json({
      success: true,
      message: "LoggedIn successfully",
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("token").status(200).json({
      success: true,
      message: "logged Out successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, login, logOut};
