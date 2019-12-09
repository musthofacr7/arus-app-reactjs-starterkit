import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../../component/appbar';
import Profile from '../../assets/avatar.png';
import { withRouter } from 'react-router-dom';
import Arrow from '../../assets/arrow.png';
import User from '../../assets/users.png';
import BottomNavigation from '../../component/bottom-navigation';
import { getProfile } from '../../services/profile';
import { ProfileContext } from '../../context/profile';

function DetailAnggota(props) {
  const handleClickOne = () => {
    props.history.push('/edit-profil');
  };

  const handleClickTwo = () => {
    props.history.push('/list-anggota');
  };
  const { classes } = props;
  const user = JSON.parse(localStorage.getItem('user'));

  const [data, setData] = useContext(ProfileContext);
  useEffect(() => {
    const getProfileData = async () => {
      const profile = await getProfile(user.id);
      setData(profile);
      console.log(profile);
    };

    getProfileData();
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem('login');
    window.location.reload();
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar title="Profile" />

        <Grid container spacing={0} className={classes.gridTop}>
          <Grid item xs={2} className={classes.gridName}>
            <img src={Profile} className={classes.image} alt="avatar" />
          </Grid>
          <Grid item xs={6} className={classes.gridName}>
            <Typography className={classes.name}>{user.name}</Typography>

            <Typography className={classes.nik}>NIK : {user.nik}</Typography>
          </Grid>
          <Grid item xs={3} className={classes.gridEdit}>
            <Typography onClick={handleClickOne}>Edit Profile</Typography>
          </Grid>
        </Grid>

        <div>
          <Grid
            container
            spacing={0}
            className={classes.gridItemTwo}
            onClick={handleClickTwo}
          >
            <Grid item xs={2} className={classes.icon}>
              <img src={User} alt="user" />
            </Grid>
            <Grid item xs={5} className={classes.gridTitle}>
              <Typography className={classes.title}>
                Anggota Keluarga
              </Typography>
            </Grid>
            <Grid item xs={5} className={classes.arrow}>
              <img src={Arrow} alt="back" />
            </Grid>
          </Grid>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div className={classes.boxButton}>
              <Button
                onClick={handleLogOut}
                fullWidth
                disableRipple={true}
                id="submit-button"
                className={classes.button}
              >
                <Typography style={{ textTransform: 'none' }}>
                  Keluar
                </Typography>
              </Button>
            </div>
          </div>
        </div>

        <BottomNavigation />
      </Container>
    </React.Fragment>
  );
}

export default withRouter(DetailAnggota);
