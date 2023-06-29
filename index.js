const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

//템플릿
// app.set("view engine", "ejs");
// app.use("/views", express.static(__dirname + "/views"));
app.use(cors());

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Router = require("./routes/index");
app.use("/", Router);

// app.get("/", function (req, res) {
//   res.render("index");
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
