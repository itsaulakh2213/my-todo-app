const express = require("express");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleWare/error");
const mongoose = require('mongoose');

require('dotenv').config();

const connectToMongoose = ()=>{ mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) => console.log(`Connected to Mongoose ${data.connection.host}`)).catch((err) => console.log(err.message))}


//UncaughtException error
process.on("uncaughtException", (err) => {
  console.log(`error : ${err.message}`);
  console.log("uncaughtException error shutting down");
  process.exit(1);
});


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api", require("./routes/userRoute"));
app.use("/api", require("./routes/todoRoute"));

app.use(errorMiddleware);

// connect to the server & mongodb
connectToMongoose();
const server = app.listen(process.env.PORT, () => {
  console.log(`listeners listening on port http://localhost:${process.env.PORT}`);
});

//Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`error : ${err.message}`);
  console.log("shutting down");

  server.close(() => {
    process.exit(1);
  });
});
