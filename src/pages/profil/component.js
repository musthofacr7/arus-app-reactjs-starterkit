import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../../component/appbar";
import Profile from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import Arrow from "../../assets/arrow.png";
import User from "../../assets/users.png";
import BottomNavigation from "../../component/bottom-navigation";
import { getProfile } from "../../services/profile";
import { ProfileContext } from "../../context/profile";

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
        <AppBar title="Profile" />

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.gridContent}>
              <Grid item xs={12} className={classes.gridItem}>
                <Grid container spacing={0} className={classes.gridItemOne}>
                  <Grid item xs={2} className={classes.gridName}>
                    <img src={Profile} className={classes.image} alt="avatar" />
                  </Grid>
                  <Grid item xs={6} className={classes.gridName}>
                    <Typography className={classes.name}>
                      Kina Gatie Poetri
                    </Typography>

                    <Typography className={classes.nik}>
                      NIK : 989123989
                    </Typography>
                  </Grid>

                  <Grid item xs={4} className={classes.gridEdit}>
                    <Link className={classes.link} to="/edit-profil">
                      Edit Profile
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div>
          <Grid item xs={12} className={classes.gridItemTwo}>
            <Grid item xs={2} className={classes.icon}>
              <img src={User} alt="user" />
            </Grid>
            <Grid item xs={5} className={classes.gridTitle}>
              <Typography className={classes.title}>
                Anggota Keluarga
              </Typography>
            </Grid>
            <Grid item xs={5} className={classes.arrow}>
              <Link className={classes.linkArrow} to="/list-anggota">
                <img src={Arrow} alt="back" />
              </Link>
            </Grid>
          </Grid>

          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div className={classes.boxButton}>
              <Button
                fullWidth
                disableRipple={true}
                id="submit-button"
                className={classes.button}
                // onClick={}
              >
                <Typography style={{ textTransform: "none" }}>
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

export default DetailAnggota;
