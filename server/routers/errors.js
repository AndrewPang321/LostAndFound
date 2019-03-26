module.exports = {
    default: (err, req, res, next) =>
        res.status(500).json({ detail: err.toString() }),
};
