import { Box, Typography } from "@mui/material";
import React from "react";

interface IApartmetCard {
    pic: string;
    rooms: number;
    s: number;
}

export default function ApartmentCard(props: IApartmetCard) {
    return (
        <Box
            sx={{
                width: "255px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center ",
                border: "1px solid",
                borderColor: 'divider'
            }}
        >
            <img src={props.pic} alt="img" style={{ width: 190, margin: 20 }} />
            <Box sx={{ display: "flex", width: "100%", borderTop: "1px solid", borderColor: "divider" }}>
                <Box sx={{ width: "50%", textAlign: "center", borderRight: "1px solid", borderColor: "divider" }}>
                    <Typography>Площадь</Typography>
                    <Typography>{props.s}</Typography>
                </Box>
                <Box sx={{ width: "50%", textAlign: "center" }}>
                    <Typography>Комнат</Typography>
                    <Typography>{props.rooms}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
