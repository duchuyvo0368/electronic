const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error:  ${error.message}`);
    process.exit(1); 
  }
};

module.exports = dbConnect;
