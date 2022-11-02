const User = require("../Model/Users");

exports.userLogin = (req, res) => {
  User.find()
    .then((success) => {
      res.status(200).json({
        message: "Login Successfull",
        notesData: success,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error while logging in",
        error: err,
      });
    });
};

exports.userRegister = (req, res) => {
    User.find()
      .then((success) => {
        res.status(200).json({
          message: "Registered successfully",
          register: success,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "error while registering",
          error: err,
        });
      });
  };