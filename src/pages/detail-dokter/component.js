import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "../../component/appbar";
import Grid from "@material-ui/core/Grid";
import Profile from "../../assets/profil.png";
import Gmail from "../../assets/gmail.png";
import Call from "../../assets/vector.png";
import Phone from "../../assets/phone.png";
import { Typography } from "@material-ui/core";
import CardDetailDokter from "../../component/card-detail-dokter";

function DetailDokter(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Profile Dokter" />

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.gridContent}>
              <Grid item xs={12} className={classes.gridItem}>
                <Grid container spacing={0} className={classes.gridItemOne}>
                  <Grid item xs={2} className={classes.gridField}>
                    <img src={Profile} className={classes.image} alt="avatar" />
                  </Grid>
                  <Grid item xs={9} className={classes.gridName}>
                    <Typography className={classes.name}>
                      Dr. Jayadi Efendi, SH
                    </Typography>

                    <Typography className={classes.nik}>
                      Spesialis Gigi
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.gridContent}>
            <Grid item xs={12} className={classes.gridKontak}>
              <Grid container spacing={0} className={classes.gridItemOne}>
                <Grid item xs={2} className={classes.gridText}>
                  <img src={Call} className={classes.iconCall} alt="icon" />
                </Grid>
                <Grid item xs={10} className={classes.gridText}>
                  <Typography className={classes.number}>
                    0856-0981-0911
                  </Typography>
                </Grid>

                <Grid item xs={2} className={classes.gridPhone}>
                  <img src={Phone} className={classes.iconPhone} alt="icon" />
                </Grid>
                <Grid item xs={10} className={classes.gridPhone}>
                  <Typography className={classes.number}>
                    (021) 9812-1298
                  </Typography>
                </Grid>

                <Grid item xs={2} className={classes.gridPhone}>
                  <img src={Gmail} className={classes.iconPhone} alt="icon" />
                </Grid>
                <Grid item xs={10} className={classes.gridPhone}>
                  <Typography className={classes.number}>
                    jayadiefendi@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.gridItemTwo}>
            <Typography className={classes.jadwal}>Jadwal Praktik</Typography>
          </Grid>

          <CardDetailDokter />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default DetailDokter;
