const express = require("express");
const path = require("path");
const tableArr = [];
const waitArr = []

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));



// Displays all characters
app.get("/api/table", (req, res) => {
  return res.json(tableArr);
});

app.get("/api/wait", (req, res) => {
    return res.json(waitArr);
  });



app.post("/api/table", (req, res) => {

  const newTable = req.body;
  if(tableArr.length > 5){
    waitArr.push(newTable)
  } else {
    tableArr.push(newTable)
  }

  console.log(newTable);

  res.json(newTable);
});

// Starts the server to begin listening
// =====================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
