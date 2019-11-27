import React from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={0} className={classes.gridFab}>
        <Grid className={classes.stickToBottom}>
          <Fab
            className={classes.fab}
            disableRipple={true}
            style={{ backgroundColor: "#26CAC0" }}
          >
            <Link to="/add-keluarga">
              <AddIcon className={classes.icon} />
            </Link>
          </Fab>
        </Grid>
      </Grid>
    );
  }
}

export default Component;
