import { Box, Link, List, ListItem, ListItemButton } from "@mui/material";
import Divider from "@mui/material/Divider/Divider";

export default function Navigation() {
    return (
        <Box>
            <List sx={{display: 'flex', justifyContent: 'center', overflow: "auto"}}>
                <ListItem disablePadding={true}><Link href="/" underline="none"><ListItemButton selected={true}>Описание</ListItemButton></Link></ListItem>
                <ListItem disablePadding={true}><Link href="/" underline="none"><ListItemButton >Подбор квартиры</ListItemButton></Link></ListItem>
                <ListItem disablePadding={true}><Link href="/" underline="none"><ListItemButton >Квартирограмма</ListItemButton></Link></ListItem>
                <ListItem disablePadding={true}><Link href="/" underline="none"><ListItemButton >Ход строительства</ListItemButton></Link></ListItem>
                <ListItem disablePadding={true}><Link href="/" underline="none"><ListItemButton >Коммерция</ListItemButton></Link></ListItem>
                <ListItem disablePadding={true}><Link href="/" underline="none"><ListItemButton >Документы</ListItemButton></Link></ListItem>
            </List>
            <Divider/>
        </Box>
    );
}
