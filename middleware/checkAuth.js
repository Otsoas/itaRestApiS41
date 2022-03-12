//
const auth = require("basic-auth");

const userCheckModel = require("../models/userCheckModel.json");

const checkUsers = (req, res, next) => {
  const users = auth(req);
  //! CONTROL
  console.log(users);
  if (
    users === undefined ||
    users.name !== userCheckModel.name ||
    //users.password !== userCheckModel.password
    users.pass !== userCheckModel.pass
  ) {
    res
      .status(401)
      .json({ message: "Error, no autorizado. Introduzca datos correctos" });
  } else {
    const user = res.status(200).json({
      name: users.name,
      message: "Acceso aceptado",
    });
    //return user;
  }
};

module.exports = checkUsers;
