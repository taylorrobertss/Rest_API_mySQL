const sql = require("./db.js");

// constructor
const dogBreed = function(dogBreed) {
    this.name = dogBreed.name;
    this.type = dogBreed.type;
    this.lifeExpectancy = dogBreed.lifeExpectancy;
    this.origin = dogBreed.origin;
};

dogBreed.getAll = result => {
    sql.query("SELECT * FROM dog_breeds", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Dog Breeds: ", res);
        result(null, res);
    });
};


module.exports = dogBreed;