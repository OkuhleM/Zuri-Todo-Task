const express = require("express");
const app = express();
const {todo} = require('./routes/routes') ;
const port = 4003;



app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));

todo(app)

app.listen(port, () => {
  console.log(`listening on port${port}`);
});