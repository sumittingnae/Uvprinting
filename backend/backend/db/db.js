const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://Uvprinting:IQxrjsrhrMsuVbzV@cluster0.dsufazs.mongodb.net/UVPrinting";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Corrected typo here
    });
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Connection to the database failed:", error.message);
  }
};

module.exports = connectDB;
