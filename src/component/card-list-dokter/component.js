import React from "react";
import Avatar from "../../assets/avatar.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function CardListDokter(props) {
  const { spesialis, nama, handleClick,classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Grid
          container
          spacing={0}
          style={{
            backgroundColor: "red",
            // paddingTop: "2em",
            marginTop: "10%",
            display: "flex",
            // justifyContent: "center",
            alignItems: "center"  
          }}
        >
          <Grid item xs>
            <Grid
              container
              spacing={0}
              className={classes.gridlist}
              onClick={handleClick}
              // style={{
              //   border: "1px solid #FFFFFF",
              //   // width: "96%",
              //   borderRadius: "8px",
              //   backgroundColor: "#FFFFFF",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   // paddingTop: 15,
              //   // paddingBottom: 15,
              //   // paddingLeft: 8,
              //   // paddingRight: 8
              // }}
            >
              <Grid item xs={3}>
                <img src={Avatar} />
              </Grid>

              <Grid item xs={8}>
                <Typography>{nama}</Typography>
                <Typography>{spesialis}</Typography>
              </Grid>
              <Grid item xs={1}>
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
      </Grid>
    </React.Fragment>
  );
}

export default CardListDokter;
