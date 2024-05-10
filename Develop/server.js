const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const PORT = 3001;

// app.get('/api/notes', (req, res) => {
//     res.send('did it work');
// })

app.listen(PORT, () => {
    console.log(`App is listening on Port: ${PORT}`);
});