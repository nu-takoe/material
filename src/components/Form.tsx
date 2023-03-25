import React, { useState } from "react";
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";

export default function Form() {
    const [form, setForm] = useState({
        rooms: "",
        paying: "",
        budget: "",
        period: "",
        name: "",
        phone: ""
    });

    const handleRooms = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, rooms: (event.target as HTMLInputElement).value });
    };
    const handlePaying = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, paying: (event.target as HTMLInputElement).value });
    };
    const handleBudget = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, budget: (event.target as HTMLInputElement).value });
    };
    const handlePeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, period: (event.target as HTMLInputElement).value });
    };

    return (
        <Box
            sx={{
                marginTop: 4,
                marginBottom: 15,
                padding: "40px",
                boxShadow: "0 0 20px -10px #000",
                color: "#383838",
            }}
        >
            <Box>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Подбор квартиры в Краснодаре
                </Typography>
                <Typography sx={{ fontSize: "18px", marginBottom: 2 }}>
                    Не хотите тратить время на поиски? <br /> Заполните форму и
                    мы подберем для вас самые выгодные предложения.
                </Typography>

                <Grid container spacing={2} sx={{marginBottom: 3}}>
                    {/* комнаты */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                Количество комнат
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={form.rooms}
                                onChange={handleRooms}
                            >
                                <FormControlLabel
                                    value="студия"
                                    control={<Radio />}
                                    label="Студия"
                                />
                                <FormControlLabel
                                    value="1"
                                    control={<Radio />}
                                    label="1-комнатаная"
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<Radio />}
                                    label="2-комнатаная"
                                />
                                <FormControlLabel
                                    value="3"
                                    control={<Radio />}
                                    label="3-комнатаная"
                                />
                                <FormControlLabel
                                    value="коммерция"
                                    control={<Radio />}
                                    label="Коммерция"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {/* тип платежа */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                Тип платежа
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={form.paying}
                                onChange={handlePaying}
                            >
                                <FormControlLabel
                                    value="наличный"
                                    control={<Radio />}
                                    label="Наличный расчет"
                                />
                                <FormControlLabel
                                    value="ипотека"
                                    control={<Radio />}
                                    label="Ипотека"
                                />
                                <FormControlLabel
                                    value="рассрочка"
                                    control={<Radio />}
                                    label="Рассрочка"
                                />
                                <FormControlLabel
                                    value="военная"
                                    control={<Radio />}
                                    label="Военная ипотека"
                                />
                                <FormControlLabel
                                    value="материнский"
                                    control={<Radio />}
                                    label="Материнский капитал"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {/* бюджет */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                Бюджет
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={form.budget}
                                onChange={handleBudget}
                            >
                                <FormControlLabel
                                    value="2,5 - 3"
                                    control={<Radio />}
                                    label="2,5 - 3 млн. руб."
                                />
                                <FormControlLabel
                                    value="3 - 4,5"
                                    control={<Radio />}
                                    label="3 - 4,5 млн. руб."
                                />
                                <FormControlLabel
                                    value="4,5 - 6"
                                    control={<Radio />}
                                    label="4,5 - 6 млн. руб."
                                />
                                <FormControlLabel
                                    value="6+"
                                    control={<Radio />}
                                    label="6 млн. руб. и более"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {/* период */}
                    <Grid item xs={12} sm={6} md={3}>
                    <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                Срок сдачи
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={form.period}
                                onChange={handlePeriod}
                            >
                                <FormControlLabel
                                    value="Сдан"
                                    control={<Radio />}
                                    label="Сдан"
                                />
                                <FormControlLabel
                                    value="До года"
                                    control={<Radio />}
                                    label="До года"
                                />
                                <FormControlLabel
                                    value="1 год и более"
                                    control={<Radio />}
                                    label="1 год и более"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>

                <Divider sx={{marginBottom: 4}} />
                
                <Box sx={{display: "flex", justifyContent: "space-around",flexDirection: {xs: "column", md: "row"}, marginBottom: 3}}>
                    <TextField label="Ваше имя" size="small"></TextField>
                    <TextField label="Ваш телефон" size="small" sx={{margin: {xs: "10px 0px 12px 0px", md: "0px"}}}></TextField>
                    <Button variant="contained">Подбор квартиры</Button>
                </Box>
                <Typography>Нажимая кнопку подбора, вы подтверждаете согласие на обработку персональных данных в соответствии с Политикой конфиденциальности</Typography>
            </Box>
        </Box>
    );
}
