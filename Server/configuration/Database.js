const mongoose = require("mongoose");
const Package = require("../package.json");
const DatabaseName = "usmansaleem";
const url =
  "mongodb+srv://USMAN:USMAN@usman.1ag8f.mongodb.net/USMAN?retryWrites=true&w=majority";
const Database = () => {
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, connection) => {
      if (!error) {
        console.log(
          `MogoDb Connected Successfuly at MongoAtlas with Database Name ${DatabaseName}`
        );
        // console.log("Your App Has the Following Dependicies\n");
        // for (dependencies in Package.dependencies) {
        //     console.log(dependencies);
        // }
      } else {
        console.log("Error: Not Connected to the MongoDb" + error);
      }
    }
  );
};

module.exports = Database;
