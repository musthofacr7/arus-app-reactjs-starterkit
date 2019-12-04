import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "../../component/appbar";
import Grid from "@material-ui/core/Grid";

function DetailDokter(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Profile Dokter" />

        <Grid Container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default DetailDokter;
