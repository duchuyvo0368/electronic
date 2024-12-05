const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const {
  notFound,
  errorHandler,
} = require("./middlewares/errorHandler");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const prodCateRouter = require("./routes/prodCateRoute");
const blogCateRouter = require("./routes/blogCateRoute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require("./routes/couponRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const uploadRouter = require("./routes/uploadRoute");

const PORT = process.env.PORT || 4000;
dbConnect();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ extended: true, limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", prodCateRouter);
app.use("/api/blogcategory", blogCateRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running with PORT ${PORT}`);
});
