const express = require("express");
const cors = require("cors");
const riddleRoutes = require("./routes/riddles");
const port = process.env.PORT || process.argv[2] || 8080;

const app = express();
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {

    console.log(req.method);
    console.log("working");
    next();
  });

  app.use("/riddles", riddleRoutes);
  
  // app.listen(8080, () => {
  //   console.log("server is running on 5000");
  // });

  app.listen(port, () => console.log(`Listening on ${port}`));
  