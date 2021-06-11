module.exports = app => {
    const dogs = require("../controllers/dog.controller.js");

    app.get("/dogBreeds", dogs.findAll);

};