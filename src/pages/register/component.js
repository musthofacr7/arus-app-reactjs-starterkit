import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { register } from '../../services/register';
import { login } from '../../services/login';
import swal from 'sweetalert';

function RegisterApp(props) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    nik: '',
    errorPassword: '',
    errorEmail: ''
  });
  console.log(typeof data.nik);
  const [errMail, setErrMail] = useState(false);
  const [errPassword, setErrorPassword] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errNik, setErrNik] = useState(false);
  const [errConfirmation, setErrConfirmation] = useState(false);

  const handleChange = async e => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };
  useEffect(() => {}, []);
  const handleClick = async () => {
    if (data.name == '') {
      swal('Ups', 'Fill the blanked field,please', 'warning');
    } else if (data.password.length < 7) {
      setErrorPassword(true);
    } else if (data.nik.length < 7) {
      setErrNik(true);
    } else if (data.phone.length < 9) {
      setErrPhone(true);
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})/.test(data.email)
    ) {
      setErrMail(false);
    } else if (data.password != data.password_confirmation) {
      setErrConfirmation(true);
    } else {
      register(data)
        .then(res => {
          console.log(res);
          const loginData = {
            email: data.email,
            password: data.password
          };
          console.log(loginData);
          login(loginData).then(res => {
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('userToken', 'Bearer ' + res.access_token);
            localStorage.setItem('login', true);
            props.history.push('/');
            swal('Good job!', 'You registered!', 'success');
            console.log(res);
            props.history.push('/');
          });
        })
        .catch(error => {
          if (error) {
            swal('Fill the blank please!');
          }
          if (error.response.statusText == 'Unauthenticated') {
            swal(
              'Ups!',
              'The token is expired or refresh the page, please',
              'warning'
            );
          }
          if (error.response.statusText == 'Unauthenticated') {
            swal(
              'Ups!',
              'The token is expired or refresh the page, please',
              'warning'
            );
          }
        });
    }
  };
  const handleSignIn = () => {
    props.history.push('./login');
  };
  const { classes } = props;
  return (
    <Container maxWidth="xs" className={classes.Container}>
      <Paper align="center" className={classes.paperUp}>
        <Typography align="center" className={classes.textOne}>
          Register
        </Typography>
        <Typography align="center" className={classes.textTwo}>
          Antrian Rumah Sakit
        </Typography>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item>
            <TextField
              name="name"
              onChange={handleChange}
              value={data.name}
              placeholder="name"
              // error={data.name === ''}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              error={errMail}
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </Grid>
          <Grid item>
            <TextField
              helperText="at least have 8 characters"
              error={errPassword}
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
          </Grid>
          <Grid item>
            <TextField
              error={errConfirmation}
              placeholder="Password Confirmation"
              type="password"
              name="password_confirmation"
              onChange={handleChange}
              value={data.password_confirmation}
            />
          </Grid>
          <Grid item>
            <TextField
              type="number"
              helperText="at least have 10 characters"
              error={errPhone}
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={data.phone}
            />
          </Grid>
          <Grid item>
            <TextField
              type="number"
              placeholder="NIK"
              name="nik"
              onChange={handleChange}
              value={data.nik}
              error={errNik}
            />
          </Grid>
          <Grid item className={classes.gridBottom}>
            <Button
              style={{
                backgroundColor: '#F7A647'
              }}
              className={classes.registerButton}
              onClick={handleClick}
            >
              Register
            </Button>
          </Grid>
          <Grid item>
            <Typography>
              Already a member ? <b onClick={handleSignIn}>Sign in</b>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default withRouter(RegisterApp);
