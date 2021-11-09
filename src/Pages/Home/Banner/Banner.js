import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Typography, Button, Container, } from '@mui/material';
import Box from '@mui/material/Box'


const bannerBg = {
    background: `url(${bg})`,
    height: 450
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Start here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, incidunt blanditiis. Qui sequi ratione at ducimus? Sunt quasi consequatur dicta.
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;