const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect database successful");
  } catch (error) {
    console.log("Database error");
  }
};

module.exports = dbConnect;
