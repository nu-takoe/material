import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import buildingImage from "../img/1660244245_66-kartinkin-net-p-zhk-panorama-krasnodar-krasivo-foto-72.jpg";

export default function Banner() {
    return (
        <Box
            sx={{
                backgroundImage: "url(" + `${buildingImage}` + ")",
                height: "80vh",
                backgroundPosition: "center",
                backgroundSize: {
                    xs: "auto 100%",
                    sm: "auto 100%",
                    md: "auto 100%",
                    lg: "100% auto",
                },
                backgroundRepeat: "no-repeat",
            }}
        >
          <Container sx={{height: "100%", display: "flex", color: "whitesmoke", flexDirection: "column", justifyContent: "end"}}>
            <Typography component="h1" variant="h2">ЖК Кубань на Кубани</Typography>
            <Typography component="p" variant="h5" sx={{marginBottom: '1rem'}}>ЖК Кубань на Кубани в Краснодаре от застройщика ЖК Кубань</Typography>
          </Container>
        </Box>
    );
}
