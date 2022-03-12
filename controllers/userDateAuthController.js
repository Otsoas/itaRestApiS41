//
const dateUserAuthController = (req, res, next) => {
  const { name, pass } = req.body;

  if (!name || !pass) {
    return next(
      res.status(400).json({ Error: "Entre su nombre o password, por favor" })
    );
  }
  const date = new Date();
  const objUserDate = {
    name,
    date,
  };
  res.status(200).json(objUserDate);
  //res.status(200).json({ objUserDate });
};

module.exports = dateUserAuthController;
