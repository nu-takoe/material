import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import img1 from "../img/__4_.jpg";
import img2 from "../img/__5_.jpg";
import img3 from "../img/__7_.jpg";
import img4 from "../img/1748_11.jpg";
import img5 from "../img/1748_14.jpg";

export default function Gallery() {
    const arrImages = [img1, img2, img3, img4, img5];
    const [currentImg, setCurrentImg] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCurrentImg((prev) =>
                prev + 1 > arrImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(id);
    }, []);
    return (
        <Box sx={{ marginTop: 10, }}>
            <div
                className="carousel-img"
                style={{
                    backgroundImage: "url(" + `${arrImages[currentImg]}` + ")",
                }}
            ></div>
            <Box sx={{display: 'flex', justifyContent: "space-between", width: "20%", marginLeft: "auto", marginRight: "auto", marginBottom: 8}}>
                <div onClick={() => setCurrentImg(0)} className="carousel-btn"/>
                <div onClick={() => setCurrentImg(1)} className="carousel-btn"/>
                <div onClick={() => setCurrentImg(2)} className="carousel-btn"/>
                <div onClick={() => setCurrentImg(3)} className="carousel-btn"/>
                <div onClick={() => setCurrentImg(4)} className="carousel-btn"/>
            </Box>
        </Box>
    );
}
