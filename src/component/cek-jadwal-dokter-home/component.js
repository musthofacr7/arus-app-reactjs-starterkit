import React from "react";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import JadwalIcon from "../../assets/cek-jadwal.png";
import { Paper } from "@material-ui/core";

function CekJadwalDokterHome(props) {
  const handleClick = () => {
    props.history.push("/cek-jadwal-dokter");
  };

  const { classes } = props;
  return (
    <Paper onClick={handleClick}>
      <Grid className={classes.card}>
        <Grid container spacing={0} className={classes.gridCard} >
          <Grid item xs={4} align="left" className={classes.gridLeft}>
            <img src={JadwalIcon} alt="cek jadwal dokter" />
          </Grid>
          <Grid item xs={8} className={classes.gridRight}>
            Cek Jadwal Dokter
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withRouter(CekJadwalDokterHome);
