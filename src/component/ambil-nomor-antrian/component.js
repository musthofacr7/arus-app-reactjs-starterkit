import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link, withRouter } from "react-router-dom";
import AmbilNomorIcon from "../../assets/ambilnomor.png";
import Paper from "@material-ui/core/Paper";

function AmbilNomorAntrian(props) {
  const handleClick = () => {
    props.history.push("/pilih-loket");
  };
  const { classes } = props;
  return (
    <Paper onClick={handleClick}>
      <Grid className={classes.card}>
        <Grid container spacing={0} className={classes.gridCard} >
          <Grid item xs={4} align="left" className={classes.gridLeft}>
            <img src={AmbilNomorIcon} alt="ambil antrian" />
          </Grid>
          <Grid item xs={8} className={classes.gridRight}>
            Ambil Nomor Antrian
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withRouter(AmbilNomorAntrian);
