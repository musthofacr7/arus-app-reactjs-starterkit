import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../../component/appbar";
import BottomNavigation from "../../component/bottom-navigation";

function Riwayat(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Riwayat Kunjungan" />

        <Grid container spacing={0} style={{ paddingTop: "4em" }}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0}>
              <Grid item xs={12} className={classes.itemTop}>
                <Typography className={classes.textTop}>
                  Sedang Berjalan
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.itemBottom}>
                <Grid className={classes.gridBox}>
                  <Grid container spacing={0}>
                    <Grid item xs={4} className={classes.itemContent}>
                      <Typography className={classes.content}>
                        Tanggal
                      </Typography>
                      <Typography className={classes.input}>
                        12/11/19
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContent}>
                      <Typography className={classes.content}>
                        No Antrian
                      </Typography>
                      <Typography className={classes.input}> 12A</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.itemLoket}>
                      <Typography className={classes.content}>Loket</Typography>
                      <Typography className={classes.input}>
                        Locket A
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid item xs={12} className={classes.itemTop}>
                <Grid item xs={7} className={classes.gridRiwayat}>
                  <Typography className={classes.textBottom}>
                    Riwayat Kunjungan
                  </Typography>
                </Grid>
                <Grid item xs={5} className={classes.gridRiwayat}>
                  <Typography className={classes.textNumber}>(2)</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.itemBottomHistory}>
                <Grid className={classes.gridBoxBottom}>
                  <Grid container spacing={0}>
                    <Grid item xs={4} className={classes.itemContent}>
                      <Typography className={classes.content}>
                        Tanggal
                      </Typography>
                      <Typography className={classes.input}>
                        10/11/19
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.itemContent}>
                      <Typography className={classes.content}>
                        No Antrian
                      </Typography>
                      <Typography className={classes.input}> 12A</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.itemLoket}>
                      <Typography className={classes.content}>Loket</Typography>
                      <Typography className={classes.input}>
                        Locket A
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <BottomNavigation />
      </Container>
    </React.Fragment>
  );
}

export default Riwayat;
