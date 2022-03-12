//
const controlCacheMiddleware = (req, res, next) => {
  res.set("Cache-control", "no-cache");
  next();
};

module.exports = controlCacheMiddleware;
