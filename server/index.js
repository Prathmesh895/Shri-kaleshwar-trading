const express = require('express');
const port = 3000;
const { ConnectDB } = require('./lib/connectDB')
const app = express();
const cors = require('cors');
require('dotenv').config();
const bookRoute = require('./router/book')

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true,
}));


app.use("/books", bookRoute);

app.get("/", (req, res) => {
    res.send("Hello Prathmesh Gatade");
});


ConnectDB();
app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
})


module.exports = app;