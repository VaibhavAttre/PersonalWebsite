import React, { useState } from "react";
import axios from "axios";
import Image from 'react-bootstrap/Image';  
import image1 from '../assets/dusk/sky.png';

const RandomImage = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //Asyncronous function to get data from the backend 
    const fetchImage = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get("http://localhost:5000/api/random-image?query=pixel"); 
            setImage(response.data.imageUrl);
        } catch (err) {
            setError("Failed to fetch image. Please try again.");
            console.error(err);
        }
        setLoading(false);
    };

    //Component that displays the image fetched from the backend server
    return (
        <div className="container text-center mt-4">
            <Image 
            src={image1} 
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" 
            style={{ zIndex: -1 }} 
            />

            <h2>Random Image Generator</h2>
            <div>
                <button className="btn btn-primary" onClick={fetchImage}>
                    {loading ? "Loading..." : "Get Random Image"}
                </button>
            </div>
            {error && <p className="text-danger mt-2">{error}</p>}
            {image && <img src={image} alt="Random" className="mt-3 img-fluid rounded" style={{ maxWidth: "500px" }} />}
        </div>
    );
};

export default RandomImage;
