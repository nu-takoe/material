import { Box, Grid, Link, List, ListItem, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"
import React from "react";
import FooterAccordion from "./FooterAccordion";

export default function Footer() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 2, color: "#fff"}}>
            <FooterAccordion />
            <Grid container spacing={2} sx={{display: {xs: "none", md: "flex"}}}>
                <Grid item xs={3}>
                    <Typography variant="h6">Жилые комплексы</Typography>
                    <List disablePadding>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Название</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Название1</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Название2</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Название3</Link></ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Компания</Typography>
                    <List disablePadding>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>О компании</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Социальные проекты</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Команда</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Карьера</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Для ВУЗов</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Документы</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Контакты</Link></ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Приобретение</Typography>
                    <List disablePadding>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Ипотека</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Мат. капитал</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Военная ипотека</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Рассрочка</Link></ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Информация</Typography>
                    <List disablePadding>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Политика конфиденциальности</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Агенствам недвижимости</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Новости</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Акции</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Статьи</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>Видео</Link></ListItem>
                        <ListItem disablePadding sx={{marginBottom: 0.5}}><Link href="#" underline="none" color='white'>FAQ</Link></ListItem>
                    </List>
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", alignItems: "center", marginTop: 6, marginBottom: 4, color: "#fff" }}>
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
        </Box>
    );
}
