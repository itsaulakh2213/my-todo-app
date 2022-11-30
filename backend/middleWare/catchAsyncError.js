module.exports = (theFunch) => (req, res, next) => {

    Promise.resolve(theFunch(req, res, next)).catch(next);

}