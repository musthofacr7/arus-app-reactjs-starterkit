import React from "react";
import { Container, Grid } from "@material-ui/core";
import AppBar from "../../component/appbar";
import BoxCategoryLocket from "../../component/Box-category-loket";
import BottomNavigation from "../../component/bottom-navigation";
import { Link } from "react-router-dom";
import Modal from "../../component/modal";

class component extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xs" className={classes.Container}>
        <AppBar goBack title="Pilih Loket Antrian" />

        <Grid container spacing={4} className={classes.gridUpper}>
          <Link className={classes.link} onClick={this.handleOpen}>
            <Grid item>
              <BoxCategoryLocket />
            </Grid>
          </Link>
          <Link className={classes.link} onClick={this.handleOpen}>
            <Grid item>
              <BoxCategoryLocket />
            </Grid>
          </Link>
          <Link className={classes.link} onClick={this.handleOpen}>
            <Grid item>
              <BoxCategoryLocket />
            </Grid>
          </Link>
          <Link className={classes.link} onClick={this.handleOpen}>
            <Grid item>
              <BoxCategoryLocket />
            </Grid>
          </Link>
          <Link className={classes.link} onClick={this.handleOpen}>
            <Grid item>
              <BoxCategoryLocket />
            </Grid>
          </Link>
          <Link className={classes.link} onClick={this.handleOpen}>
            <Grid item>
              <BoxCategoryLocket />
            </Grid>
          </Link>
        </Grid>
        <Modal
          open={this.state.open}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
