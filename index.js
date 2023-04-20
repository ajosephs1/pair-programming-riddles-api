const express = require("express");
const riddleRoutes = require("./routes/riddles");


const app = express();

app.use(express.json());

app.use((req, res, next) => {

    console.log(req.method);
    console.log("working");
    next();
  });

  app.use("/riddles", riddleRoutes);
  
  app.listen(5000, () => {
    console.log("server is running on 5000");
  });
  