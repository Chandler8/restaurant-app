const express = require("express");
const path = require("path");
const table = require("./table");
const wait = require("./wait");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));




// Basic route that sends the user first to the AJAX Page
// app.get("/home.html", (req, res) => {
//   res.();
// });

// app.get("/table.html", (req, res) => {
//   res.();
// });

// app.get("/reserve.html", (req, res) => {
//     res.();
//   });

// Displays all characters
app.get("/api/table", (req, res) => {
  return res.json(table);
});

app.get("/api/wait", (req, res) => {
    return res.json(wait);
  });




app.post("/api/wait", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.name = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
