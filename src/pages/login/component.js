import React, { useState, useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LoginImage from '../../assets/Background.png';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import GoogleLogo from '../../assets/image 2.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { TextField } from '@material-ui/core';
import { login } from '../../services/login';
import { AuthContext } from '../../context/auth';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailClick, setEmailClick] = useState(false);
  const [data, setData] = useContext(AuthContext);

  useEffect(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
  }, []);
  const handleSignUp = () => {
    props.history.push('./register');
  };
  const handleClick = () => {
    // props.history.push('/');
    setEmailClick(true);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
    console.log(password);
  };
  const handleLogin = async () => {
    const data = {
      email: email,
      password: password
    };
    login(data)
      .then(res => {
        setData(res.user);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('userToken', res.access_token);
        localStorage.setItem('login', true);
        props.history.push('/');
      })
      .catch(error => {
        if (error.response.statusText == 'Unauthorized') {
          alert('email & password belum terdaftar');
          props.history.push('/register');
        }
      });
  };

  const { classes } = props;
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid className={classes.container}>
        <Grid item xs={12} className={classes.gridItemTop}>
          <img src={LoginImage} className={classes.image} alt="login" />
        </Grid>
        <Grid item xs={12} className={classes.textTop}>
          Login
        </Grid>

        {emailClick == false ? (
          <Grid item xs={12} className={classes.gridItemBottom}>
            <Grid container spacing={0} className={classes.gridBottom}>
              <Grid item xs={12}>
                <Box className={classes.buttonBox}>
                  <Button
                    disableRipple={true}
                    id="submit-button"
                    className={classes.button}
                    style={{
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <Grid container spacing={0} onClick={handleClick}>
                      <Grid item xs={3} className={classes.gridButton}>
                        <img
                          src={GoogleLogo}
                          className={classes.googleLogo}
                          alt="google"
                        />
                      </Grid>

                      <Grid item xs={9} className={classes.gridButton}>
                        <Typography className={classes.textButton}>
                          Masuk Dengan Akun Google
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Box>

                <Box className={classes.buttonBoxBottom}>
                  <Button
                    disableRipple={true}
                    id="submit-button"
                    className={classes.buttonBottom}
                    style={{
                      backgroundColor: '#F7A647'
                    }}
                  >
                    <Grid container spacing={0} onClick={handleClick}>
                      <Grid item xs={3}>
                        <svg
                          width="14"
                          height="20"
                          viewBox="0 0 14 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.1667 1.66666H2.83332C1.91285 1.66666 1.16666 2.41285 1.16666 3.33332V16.6667C1.16666 17.5871 1.91285 18.3333 2.83332 18.3333H11.1667C12.0871 18.3333 12.8333 17.5871 12.8333 16.6667V3.33332C12.8333 2.41285 12.0871 1.66666 11.1667 1.66666Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>

                      <Grid item xs={9} className={classes.gridButton}>
                        <Typography className={classes.textButtonBottom}>
                          Masuk Dengan Nomor HP
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Box>
                <Box className={classes.buttonBoxBottom}>
                  <Button
                    disableRipple={true}
                    id="submit-button"
                    className={classes.buttonBottom}
                    style={{
                      backgroundColor: '#F7A647'
                    }}
                  >
                    <Grid container spacing={0} onClick={handleClick}>
                      <Grid item xs={3}>
                        <MailOutlineIcon className={classes.gridIconBottom} />
                      </Grid>

                      <Grid item xs={9} className={classes.gridButton}>
                        <Typography className={classes.textButtonBottom}>
                          Masuk Dengan Email
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Grid item align="center">
            <Typography>Not Yet a member ?</Typography>
            <Typography style={{ fontWeight: 'bold' }} onClick={handleSignUp}>
              Sign Up
            </Typography>
          </Grid>
          </Grid>
        ) : (
          <div align="center" style={{ marginTop: -100 }}>
            <TextField
              name="email"
              type="email"
              label="Email"
              value={email}
              onChange={handleChangeEmail}
              fullWidth={true}
              style={{ maxWidth: '90%' }}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={handleChangePassword}
              fullWidth={true}
              style={{ maxWidth: '90%' }}
            />

            <Box className={classes.buttonBoxBottom}>
              <Button
                disableRipple={true}
                id="submit-button"
                className={classes.buttonBottom}
                style={{
                  backgroundColor: '#F7A647'
                }}
                onClick={handleLogin}
              >
                <Grid container spacing={0}>
                  <Grid item xs={12} className={classes.gridButton}>
                    <Typography className={classes.textButtonBottom}>
                      Lanjut
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Box>
          </div>
        )}
      </Grid>
    </Container>
  );
}

export default Login;
