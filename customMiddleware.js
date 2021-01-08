function logger(req, res, next) {
    console.log("logging code...");
    next();
}

module.exports = logger;