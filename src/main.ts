const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./route/server.route.ts')(app);


const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});

module.exports = server