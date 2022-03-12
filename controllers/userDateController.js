//
const dateUserController = (req, res, next) => {
  const name = req.body;

  if (!name) {
    return next(res.status(400).json({ Error: "Entre su nombre, por favor" }));
  }
  const date = new Date();
  const objUserDate = {
    name,
    date,
  };
  res.status(200).json(objUserDate);
  //res.status(200).json({ objUserDate });
};

module.exports = dateUserController;
