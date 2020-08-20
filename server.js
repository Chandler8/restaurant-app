const express = require("express");
const path = require("path");
const table = require("./table.js");
const wait = require("./wait.js");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));




<<<<<<< HEAD
// // Basic route that sends the user first to the AJAX Page
=======
// Basic route that sends the user first to the AJAX Page
>>>>>>> d25ec20bf8efd3eb7e63c4c4ee0432e9c9a02d37
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

// // Displays a single character, or returns false
// app.get("/api/characters/:character", (req, res) => {
//   const chosen = req.params.character;

//   console.log(chosen);

//   for (let i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });


app.post("/api/wait", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.name = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  wait.push(newTable);

  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
