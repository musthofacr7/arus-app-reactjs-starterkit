import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../../component/appbar';
import Profile from '../../assets/avatar.png';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import User from '../../assets/users.png';
import BottomNavigation from '../../component/bottom-navigation';
import { getProfile } from '../../services/profile';
import { ProfileContext } from '../../context/profile';

function DetailAnggota(props) {
  const { classes } = props;
  const [data, setData] = useContext(ProfileContext);
  React.useEffect(() => {
    const getProfileData = async () => {
      const profile = await getProfile();
      setData(profile);
      console.log(data);
    };

    getProfileData();
    // console.log(data);
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Profile" />

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.gridContent}>
              <Grid item xs={12} className={classes.gridItem}>
                <Grid container spacing={0} className={classes.gridItemOne}>
                  <Grid item xs={2} className={classes.gridField}>
                    <img src={Profile} className={classes.image} alt="avatar" />
                  </Grid>
                  <Grid item xs={5} className={classes.gridName} align="center">
                    <Typography className={classes.name}>
                      Kina Gatie Putri
                    </Typography>

                    <Typography className={classes.nik}>
                      NIK : 0987098709870987
                    </Typography>
                  </Grid>
                  <Grid item xs={4} className={classes.gridEdit} align="center">
                    <Link className={classes.link} to="/edit-profil">
                      Edit Profile
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs style={{ padding: 15 }} />
        </Grid>
        <Grid container align="center" spacing={0} className={classes.gridTwo}>
          <Grid item xs={2} className={classes.icon}>
            <img src={User} alt="user" />
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.text}>Anggota Keluarga</Typography>
          </Grid>
          <Grid item xs={4} className={classes.arrow}>
            <Link className={classes.linkArrow} to="/list-anggota">
              <ArrowForwardIosIcon className={classes.icon} />
            </Link>
          </Grid>
        </Grid>
        <div
          align="center"
          style={{ position: 'absolute', bottom: 60, width: '100%' }}
        >
          <Button
            disableRipple={true}
            id="submit-button"
            className={classes.button}
          >
            Keluar
          </Button>
        </div>
        <BottomNavigation />
      </Container>
    </React.Fragment>
  );
}

export default DetailAnggota;
