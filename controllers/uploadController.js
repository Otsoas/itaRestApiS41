//

const uploadController = (req, res, next) => {
  if (!req.file) {
    return next(new Error("Adjunte archivo correcto, por favor"));
  }
  res.status(200).json(req.file);
};

module.exports = uploadController;
