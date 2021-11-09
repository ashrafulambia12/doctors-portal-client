import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password didn't match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit} >
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standeard-basic'
                            label='Your Name'
                            name='name'
                            onBlur={handleOnBlur}
                            variant='standard' />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standeard-basic'
                            label='Your Email'
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                            variant='standard' />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standeard-basic'
                            label='Your Password'
                            type='password'
                            name='password'
                            onBlur={handleOnBlur}
                            variant='standard' />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standeard-basic'
                            label='ReType Your Password'
                            type='password'
                            name='password2'
                            onBlur={handleOnBlur}
                            variant='standard' />

                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant='contained'>Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button variant='text'>
                                Already Register? Please Login
                            </Button>
                        </NavLink>
                    </form>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully !</Alert>}


                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;