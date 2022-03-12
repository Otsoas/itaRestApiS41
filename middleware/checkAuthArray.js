//
const auth = require("basic-auth");

const userCheckModelArray = require("../models/userCheckModelArray.json");

const checkUserArray = (req, res, next) => {
  const usersArray = auth(req);
  const userCheck = userCheckModelArray.some((user) => {
    return usersArray.name === user.name && user.pass === usersArray.pass;
  });
  if (!userCheck || undefined) {
    res
      .status(401)
      .json({ message: "Error, no autorizado. Introduzca datos correctos" });
  } else {
    const date = new Date();
    const userFound = res.status(200).json({
      name: usersArray.name,
      date,
      message: "Acceso aceptado",
    });
    //return userFound;
  }
};

module.exports = checkUserArray;

////////////////////////////////////////////////////////////
//! json array
//
// const checkUserAuth = (req, res, next) => {
//   const credentials = auth(req) || {};
//   const isAuth = users.some((user) => {
//     return user.name === credentials.name && user.pass === credentials.pass;
//   });

//   if (!isAuth) {
//     return next(new Error("Wrong or missing credentials"));
//   }

//   next();
// };
