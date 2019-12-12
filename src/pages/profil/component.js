import React, { useContext, useEffect, useState } from 'react';
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
import { getProfile } from '../../services/profile';
import { ProfileContext } from '../../context/profile';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    height={746}
    width={400}
    speed={2}
    primaryColor="#e6e6e6"
    secondaryColor="#f4f4f4"
  >
    <rect x="34" y="26" rx="0" ry="0" width="68" height="68" />
    <rect x="113" y="33" rx="0" ry="0" width="236" height="48" />
  </ContentLoader>
);

function DetailAnggota(props) {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleClickOne = () => {
    props.history.push('/edit-profil');
  };

  const handleClickTwo = () => {
    props.history.push('/list-anggota');
  };
  const { classes } = props;

  const [data, setData] = useState({});
  useEffect(() => {
    const getProfileData = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const profile = await getProfile(user.id);
      setData(profile.row);
      console.log(data);
      console.log(profile);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
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
        {isLoading == true ? (
          <div
            style={{
              marginTop: 50,
              width: '100%',
              backgroundColor: 'white'
            }}
          >
            {' '}
            <MyLoader />
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
          </div>
        ) : (
          <Grid container spacing={0} className={classes.gridTop}>
            <Grid item xs={2} className={classes.gridName}>
              <img src={Profile} className={classes.image} alt="avatar" />
            </Grid>
            <Grid item xs={7} className={classes.gridName}>
              <Typography className={classes.name}>{data.name}</Typography>

              <Typography className={classes.nik}>NIK : {data.nik}</Typography>
            </Grid>
            <Grid item xs={3} className={classes.gridEdit}>
              <Typography onClick={handleClickOne}>Edit Profile</Typography>
            </Grid>
          </Grid>
        )}

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
            <Typography className={classes.title}>Anggota Keluarga</Typography>
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
              <Typography style={{ textTransform: 'none' }}>Keluar</Typography>
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default withRouter(DetailAnggota);
