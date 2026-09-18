const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "My chatbot backend is running!"
    });
});

app.post("/chat", (req, res) => {

    const message = req.body.message;

    res.json({
        reply: "Bot received: " + message
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});