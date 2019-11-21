import React from "react";
import BottomNavigation from "../../component/bottom-navigation";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.container}>
        <Grid className={classes.gridContainer}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.gridProfil}>
              <Grid item xs={6}>
                hello
              </Grid>
              <Grid item xs={6}>
                hello
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridBottom}>
            hello
          </Grid>
        </Grid>

        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
