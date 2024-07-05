const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/userRoutes");
const ReferRoute = require("./routes/referRoutes");
const options={
  origin:true,


}
const app = express();

app.use(express.json());
app.use(cors(options));

app.use("/api/user", UserRoute);
app.use("/api/send",ReferRoute );

const server = app.listen(3000, () =>
  console.log(`
Server ready at: http://localhost:3000`)
);