const Note = require("../Model/Note");

exports.getAllNote = (req, res) => {
  Note.find()
    .then((success) => {
      res.status(200).json({
        message: "Notes has been fetched successfully",
        notesData: success,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error while fetching data",
        error: err,
      });
    });
};
