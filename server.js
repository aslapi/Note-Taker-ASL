// const express = require("express");
// const fs = require("fs");
// // const uuid = require('./helpers/uuid');

// const app = express();

// app.use(express.static("public"));

// const api = require("./db/db.json");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const PORT = process.env.PORT || 3001;

// app.get("/notes", (req, res) => {
//   res.sendFile(__dirname + "/public/notes.html");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(api);
// });

// app.post("/api/notes", (req, res) => {
//   fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       let notes = JSON.parse(data);
//       let newNote = req.body;
//       notes.push(newNote);
//       fs.writeFile(__dirname + "/db/db.json", JSON.stringify(notes), (err) => {
//         res.json(newNote);
//       });
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`App is listening on Port: ${PORT}`);
// });


const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//ROOT GET ROUTE HOMEPAGE
app.get('/', (req, res) => {
  res.sendFile(__dirname + "index.html");
});

//GET ROUTE FOR USERS TO SEE NOTES PAGE
app.get('/notes', (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

//GET ROUTE FOR JSON NOTES
app.get('/api/notes', (req, res) => {
  fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      let notes = JSON.parse(data);
      res.json(notes);
    }
  })
})


app.listen(PORT, () => {
  console.log("Application listening on " + PORT);
});

