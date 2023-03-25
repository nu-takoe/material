import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import React from "react";

export default function CallBack() {
    return (
        <Box sx={{ color: "#383838", marginTop: 8, marginBottom: 8 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2, flexDirection: {xs: "column", md: "row"} }}>
                <Box sx={{ display: "flex", alignItems: "center", }}>
                    <Box sx={{border: "1px solid", borderColor: 'divider', width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: 3}}>
                        <PhoneAndroidIcon color="primary" />
                    </Box>
                    <Box>
                        <Typography variant="h6">Оставьте заявку</Typography>
                        <Typography>
                            и мы перезвоним вам в ближайшее время
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display: {xs:"none", md:"flex"}, alignItems: "center"}}>
                    <TextField size="small" label="Введите номер телефона" sx={{}}/>
                    <Button variant="contained" sx={{marginLeft: 3}}>Перезвоните мне</Button>
                </Box>
                <Box sx={{display: {xs:"flex", md:"none"}, alignItems: "center", flexDirection: "column", marginTop: 2 }}>
                    <TextField size="small" label="Введите номер телефона" sx={{width: "100%"}}/>
                    <Button variant="contained" sx={{width: "100%", marginTop: 2}}>Перезвоните мне</Button>
                </Box>
            </Box>
            <Box>
                <Typography>
                    Нажимая кнопку отправить, вы подтверждаете согласие на
                    обработку персональных данных в соответствии с Политикой
                    конфиденциальности
                </Typography>
            </Box>
        </Box>
    );
}
