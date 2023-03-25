import { Box, List, ListItem, Typography, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

export default function DrawerMenu() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    margin: 2,
                }}
            >
                <Link href="/" color="primary" sx={{ marginTop: "4px" }}>
                    <HomeIcon />
                </Link>
                <Link
                    href="/"
                    variant="h5"
                    color="primary"
                    sx={{
                        textDecoration: "none",
                        marginLeft: "5px",
                    }}
                >
                    ЖК "KUBAN"
                </Link>
            </Box>
            <List>
                <ListItem>
                  <Link href="/" underline="none">Квартиры</Link>
                </ListItem>
                <ListItem>
                  <Link href="/" underline="none">Комплексы</Link>
                </ListItem>
                <ListItem>
                  <Link href="/" underline="none">Ипотека</Link>
                </ListItem>
                <ListItem>
                  <Link href="/" underline="none">Соц.проекты</Link>
                </ListItem>
                <ListItem>
                  <Link href="/" underline="none">Акции и новости</Link>
                </ListItem>
                <ListItem>
                  <Link href="/" underline="none">О компании</Link>
                </ListItem>
                <ListItem>
                  <Link href="/" underline="none">Контакты</Link>
                </ListItem>
            </List>
            <Box sx={{width: "100%", textAlign: "center", marginTop: 2}}>
                <Typography fontWeight={700} >8 800 80 80 800</Typography>
            </Box>
        </Box>
    );
}
