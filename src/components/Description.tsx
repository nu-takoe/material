import { Box, Typography, } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import React from 'react'

export default function Description() {
  return (
    <Box sx={{marginTop: 5}}>
      <Typography variant='h4' sx={{fontWeight: 500, marginBottom: 2}} color='#383838'>ЖК Кубань на Кубани в Краснодаре</Typography>
      <Typography sx={{fontSize: '18px', fontWeight: 100, maxWidth: "1000px", marginBottom: 7}} color='#383838'>Место, в которое хочется вернуться. Компания представляет жилой комплекс. Уютная, уединенная территория, собственная прогулочная зона, внутренняя инфраструктура – здесь все располагает к спокойствию, счастью и состоянию полной гармонии. Жилой комплекс представляет собой монолитный дом комфорт-класса. Здание отличается лаконичными архитектурными решениями, высоким уровнем тепло- и звукоизоляции, повышенной износостойкостью и долговечностью. Это пространство будет включать в себя места для отдыха, прогулок, общения, занятий спортом и игр, появятся красивые клумбы, аккуратные газоны, будут высажены деревья и кустарники. На первых этажах жилых зданий разместятся встроенные нежилые помещения, в которых откроются магазины, предприятия бытового обслуживания, офисы.</Typography>
      
      <Grid container spacing={2} sx={{color:'#383838'}}>
        <Grid item xs={6} sm={4}><Typography variant='h5'>Монолит-кирпич</Typography> <Typography>Тип здания</Typography></Grid>
        <Grid item xs={6} sm={4}><Typography variant='h5'>3 квартал 2023</Typography> <Typography>Сдача</Typography></Grid>
        <Grid item xs={6} sm={4}><Typography variant='h5'>17 этажей</Typography> <Typography>Этажность</Typography></Grid>
        <Grid item xs={6} sm={4}><Typography variant='h5'>2.7 м</Typography> <Typography>Высота потолков</Typography></Grid>
        <Grid item xs={6} sm={4}><Typography variant='h5'>Комфорт +</Typography> <Typography>Класс жилья</Typography></Grid>
        <Grid item xs={6} sm={4}><Typography variant='h5'>от 120 000 ₽/м2</Typography> <Typography>Стоимость</Typography></Grid>
      </Grid>
    </Box>
  )
}
