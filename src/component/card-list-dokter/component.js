import React from "react";
import Avatar from "../../assets/avatar.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function CardListDokter(props) {
  const { spesialis, nama, handleClick, classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.gridItemList}>
      <Grid container spacing={0} className={classes.gridContentList}>
        <Grid
          container
          spacing={0}
          className={classes.gridList}
          onClick={handleClick}
        >
          <Grid item xs={3} className={classes.avatar}>
            <img src={Avatar} />
          </Grid>

          <Grid item xs={7}>
            <Typography className={classes.nama}>{nama}</Typography>
            <Typography className={classes.spesialis}>{spesialis}</Typography>
          </Grid>
          <Grid item xs={2} className={classes.arrow}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#F7A647"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16L16 12L12 8"
                stroke="#F7A647"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#F7A647"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CardListDokter;
