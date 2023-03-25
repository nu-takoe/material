import { AppBar, Box, IconButton, List, ListItem, ListItemButton,  Toolbar, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

interface HeaderProps {
    toggleFunction: (param: boolean) => void
}

export default function Header({toggleFunction}: HeaderProps) {
    return (
        <AppBar position="relative">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link href="/" color="inherit" sx={{ marginTop: "4px" }}>
                        <HomeIcon />
                    </Link>
                    <Link
                        href="/"
                        variant="h5"
                        color="inherit"
                        sx={{
                            textDecoration: "none",
                            marginLeft: "5px",
                            display: { xs: "none", sm: "none", md: "none", lg: 'block' },
                        }}
                    >
                        ЖК "KUBAN"
                    </Link>
                </Box>
                <Box sx={{display: {md: 'block', sm: 'none', xs: "none"}}}>
                    <List sx={{display: "flex"}}>
                        <ListItem disablePadding={true}><Link href="/" underline="none" sx={{color: "inherit"}}><ListItemButton className="ListItemButton" selected={true}>Квартиры</ListItemButton></Link></ListItem>
                        <ListItem disablePadding={true}><Link href="/" underline="none" sx={{color: "inherit"}}><ListItemButton>Комплексы</ListItemButton></Link></ListItem>
                        <ListItem disablePadding={true}><Link href="/" underline="none" sx={{color: "inherit"}}><ListItemButton>Ипотека</ListItemButton></Link></ListItem>
                        <ListItem disablePadding={true}><Link href="/" underline="none" sx={{color: "inherit"}}><ListItemButton>Соц.проекты</ListItemButton></Link></ListItem>
                        <ListItem disablePadding={true}><Link href="/" underline="none" sx={{color: "inherit"}}><ListItemButton sx={{whiteSpace: "nowrap"}}>Акции и новости</ListItemButton></Link></ListItem>
                        <ListItem disablePadding={true}><Link href="/" underline="none" sx={{color: "inherit"}}><ListItemButton sx={{whiteSpace: "nowrap"}}>О компании</ListItemButton></Link></ListItem>
                    </List>
                </Box>
                <Typography>8 800 80 80 800</Typography>
                <IconButton sx={{display: {md: 'none', sm: 'block', xs: "block"}}} onClick={() => toggleFunction(true)}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
