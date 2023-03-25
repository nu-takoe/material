import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Link,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import React from "react";

export default function FooterAccordion() {
    return (
        <Box sx={{ width: "100%", display: {xs: "block", md: "none"}}}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Жилые комплексы</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List disablePadding>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Название</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Название1</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Название2</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Название3</Link></ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Компания</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List disablePadding>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">О компании</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Социальные проекты</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Команда</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Карьера</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Для ВУЗов</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Документы</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Контакты</Link></ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Приобретение</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List disablePadding>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Ипотека</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Мат. капитал</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Военная ипотека</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Рассрочка</Link></ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Информация</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List disablePadding>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Политика конфиденциальности</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Агенствам недвижимости</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Новости</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Акции</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Статьи</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">Видео</Link></ListItem>
                        <ListItem disableGutters><Link href="#" underline="none" color="black">FAQ</Link></ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
