import React from "react";
import { Container, Typography, Grid, Fab } from "@material-ui/core";
import AppBar from "../../component/appbar";
import BottomNavigation from "../../component/bottom-navigation";
import ListData from "../../component/card-anggota";
import FAB from "../../component/fab";

class component extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Anggota Keluarga" />

        <Grid container spacing={4} className={classes.gridUpper}>
          <Grid item>
            <ListData />
          </Grid>

          <Grid item>
            <ListData />
          </Grid>

          <Grid item>
            <ListData />
          </Grid>

          <Grid item>
            <ListData />
          </Grid>

          <Grid item>
            <ListData />
          </Grid>
          <Grid item>
            <ListData />
          </Grid>
          <Grid item>
            <ListData />
          </Grid>
        </Grid>

        <FAB />
      </Container>
    );
  }
}

export default component;
