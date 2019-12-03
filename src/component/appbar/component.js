import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";

class Component extends React.Component {
  goBack = () => {
    if (this.props.location.search) {
      const query = queryString.parse(this.props.location.search);
      if (query.from) {
        this.props.history.push(query.from);
        return;
      }
    }

    switch (this.props.match.path) {
      case "/riwayat":
        this.props.history.push("/");
        break;

      case "/pilih-loket":
        this.props.history.push("/");
        break;

      case "/edit-profil":
        this.props.history.push("/profil");
        break;

      case "/list-anggota":
        this.props.history.push("/profil");
        break;

      case "/edit-profil-keluarga":
        this.props.history.push("/list-anggota");
        break;

      case "/detail-anggota-keluarga":
        this.props.history.push("/list-anggota");
        break;

      default:
        this.props.history.goBack();
        break;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Box display="flex" justifyContent="center" bgcolor="white">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar variant="dense">
            {this.props.goBack && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="Menu"
                onClick={this.goBack}
              >
                <ArrowBackIcon />
              </IconButton>
            )}

            {this.props.search ? (
              <div
                className={classes.search}
                onClick={() => {
                  this.props.history.push("/product-search");
                }}
              >
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Cari pasien operasi, visit, & poliklinik"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "Search" }}
                />
              </div>
            ) : (
              <Typography variant="h6" className={classes.title}>
                {this.props.title}
              </Typography>
            )}
          </Toolbar>
          {this.props.children && (
            <React.Fragment>{this.props.children}</React.Fragment>
          )}
        </AppBar>
      </Box>
    );
  }
}

Component.propTypes = {
  title: PropTypes.element.isRequired,
  backTo: PropTypes.string
};

Component.defaultProps = {
  title: ""
};

export default withRouter(withStyles(styles)(Component));
