const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/Studentroutes");
const dotenv = require("dotenv"); 

dotenv.config(); 

app.get("/", (req, res) => {
    res.send("Server is running on port " + port);
});

var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);


const port = process.env.PORT || 5000; 
const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;

mongoose.connect(dbUrl, { dbName: dbName }).then(() => {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
