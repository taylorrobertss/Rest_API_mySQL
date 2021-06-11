const dog = require("../models/dog.model.js");

exports.findAll = (req, res) => {
    dog.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};