import React from "react";
import { Typography, Grid, Container, CssBaseline } from "@material-ui/core";
import AppBar from "../../component/appbar";
import BottomNavigation from "../../component/bottom-navigation";

class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xs" className={classes.container}>
          <AppBar goBack title="Riwayat Kunjungan" />

          <Grid container spacing={0} style={{ paddingTop: "15%" }}>
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
                      <Grid item xs={4} className={classes.itemContent}>
                        <Typography className={classes.content}>
                          Loket
                        </Typography>
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
                  <Typography className={classes.textBottom}>
                    Riwayat Kunjungan
                  </Typography>
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
                      <Grid item xs={4} className={classes.itemContent}>
                        <Typography className={classes.content}>
                          Loket
                        </Typography>
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
}

export default component;
