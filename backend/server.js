const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const API_KEY = process.env.PIXABAY_API_KEY; 

//Gets the random images as specified by the random image.jsx file. 
app.get("/api/random-image", async (req, res) => {
    try {
        const query = req.query.query;
        const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=50`;

        const response = await axios.get(URL);
        const images = response.data.hits;

        if (images.length === 0) {
            return res.status(404).json({ error: "No images found" });
        }
        const randomImage = images[Math.floor(Math.random() * images.length)].webformatURL;

        res.json({ imageUrl: randomImage });
    } catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

//Server listening on PORT (set to 5000 right now)
app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
});
