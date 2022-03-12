//
const userJson = require("../models/userModel.json");

const userController = function (req, res) {
  res.status(200).json(userJson);
  console.log(userJson);
  //! solucionado el undefined
  const jsonParse = `Nombre: ${userJson.name}, Edad: ${userJson.age} y la url: ${userJson.url}`;
  console.log(jsonParse);
  // console.log(
  //   `name: ${userJson.name} age: ${userJson.age} url: ${userJson.url}`
  // );
};

module.exports = userController;

// url = req.protocol + "://" + req.get("host") + req.originalUrl;
