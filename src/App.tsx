import { Typography, Drawer, Box, Divider } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Banner from "./components/Banner";
import CallBack from "./components/CallBack";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TabPanel from "./components/TabPanel";
import DrawerMenu from "./components/DrawerMenu";

function App() {
    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
    return (
        <div className="App">
            <Header toggleFunction={setDrawerIsOpen} />
            <Banner />
            <Container>
                <Box>
                    <Navigation />
                    <Description />
                    <Gallery />
                    <Divider />
                    <Form />
                    <TabPanel />
                    <Divider />
                    <CallBack />
                </Box>
            </Container>
            <Box sx={{backgroundColor: "#1976d2"}}>
                <Container>
                    <Footer />
                </Container>
            </Box>
            <Drawer open={drawerIsOpen} anchor="left" onClose={() => setDrawerIsOpen(false)}><DrawerMenu/></Drawer>
        </div>
    );
}

export default App;
