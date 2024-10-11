const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/", (_, res) => {
    res.sendFile("/static/index.html");
});

app.listen(3456, () => {
    console.log("Server is running on port 3456");
})
