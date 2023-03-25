import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ApartmentCard from "./ApartmentCard";
import { Grid } from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const oneRoom = [
    { img: require("../img/rooms/1/dnm_p1_f2_3_n06.png"), rooms: 1, s: 40.38 },
    { img: require("../img/rooms/1/dnm_p1_f2_3_n10.png"), rooms: 1, s: 40.95 },
    { img: require("../img/rooms/1/dnm_p1_f4_17_n03.png"), rooms: 1, s: 45.87 },
    { img: require("../img/rooms/1/dnm_p1_f4_17_n06.png"), rooms: 1, s: 46.36 },
    { img: require("../img/rooms/1/dnm_p1_f4_17_n10.png"), rooms: 1, s: 46.79 },
];
const twoRoom = [
    { img: require("../img/rooms/2/dnm_p1_f2_3_n09.png"), rooms: 2, s: 66.8 },
    { img: require("../img/rooms/2/dnm_p1_f4_17_n02.png"), rooms: 2, s: 68.62 },
    { img: require("../img/rooms/2/dnm_p1_f4_17_n08.png"), rooms: 2, s: 69.48 },
    { img: require("../img/rooms/2/dnm_p1_f4_17_n09.png"), rooms: 2, s: 70.65 },
    { img: require("../img/rooms/2/dnm_p2_f2_3_n02.png"), rooms: 2, s: 71.72 },
    { img: require("../img/rooms/2/dnm_p2_f4_17_n05.png"), rooms: 2, s: 75.29 },
];

function Panel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function TabPanel() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", color: "#383838" }}>
            <Typography variant="h5" sx={{ marginBottom: 4 }}>
                Типы планировок
            </Typography>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="1-комнатные" {...a11yProps(0)} />
                    <Tab label="2-комнатные" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <Panel value={value} index={0}>
                <Grid container spacing={2}>
                    {oneRoom.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <ApartmentCard
                                pic={item.img}
                                rooms={item.rooms}
                                s={item.s}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Panel>
            <Panel value={value} index={1}>
                <Grid container spacing={2}>
                    {twoRoom.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <ApartmentCard
                                pic={item.img}
                                rooms={item.rooms}
                                s={item.s}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Panel>
        </Box>
    );
}
