import React from "react";
// import Appbar from "../../component/appbar";
import BottomNavigation from "../../component/bottom-navigation";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import BoxPilihLoket from "../../component/Box-category-loket";
import AmbilAntrianIcon from "../../assets/Group 20.png";
import Profile from "../../assets/Ellipse 8.png";
import { Link } from "react-router-dom";
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.Container}>
        <Grid
          align="center"
          container
          spacing={0}
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 3
          }}
        >
          <Grid
            xs={2}
            style={{
              background: "#26CAC0",
              maxWidth: "100%"
            }}
            align="center"
          >
            <Grid
              container
              spacing={0}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "10%"
              }}
            >
              <Grid
                xs={6}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
              >
                <img src={Profile} style={{ paddingLeft: "20%" }} />
              </Grid>
              <Grid
                xs={6}
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                Kina Gatie Putri
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={2}
            style={{
              background: "white",
              maxWidth: "100%",
              marginTop: "-10%",
              width: 328,
              display: "flex",
              justifyContent: "center",
              borderRadius: 8,
              paddingBottom: 21
            }}
          >
            {/* <Box> */}
            <Grid
              align="center"
              Container
              spacing={0}
              style={{ paddingTop: 23 }}
            >
              <Grid item xs={4} style={{ maxWidth: "100%" }}>
                <Typography
                  style={{
                    color: "#25282B",
                    fontSize: 16,
                    fontFamily: "Google Sans",
                    fontWeight: "bold",
                    lineHeight: "20px"
                  }}
                >
                  Nomor Antrian Anda
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ maxWidth: "100%" }}>
                <Typography
                  style={{
                    paddingTop: 34,
                    color: "#26CAC0",
                    fontSize: 40,
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans"
                  }}
                >
                  12 A
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ maxWidth: "100%" }}>
                <Typography
                  style={{
                    paddingTop: 6,
                    color: "#9E9E9E",
                    fontFamily: "Nunito Sans",
                    fontWeight: 600,
                    fontSize: "18px"
                  }}
                >
                  Locket A
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ maxWidth: "100%", marginTop: 29 }}>
                <Box
                  align="center"
                  style={{
                    background: "#E9F9F8",
                    border: "0.5px solid #26CAC0",
                    borderRadius: "3px",
                    borderSizing: "border-box",
                    width: 284
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Nunito Sans",
                      fontStyle: "normal",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "#9E9E9E"
                    }}
                  >
                    Estimasi di panggil pukul
                    <strong style={{ color: "black" }}> 14:00 </strong>WIB
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {/* </Box> */}
          </Grid>

          <Grid
            xs={2}
            style={{
              background: "white",
              maxWidth: "100%",
              marginTop: 20,
              maxWidth: "100%",
              // margin: 'auto',

              width: 328,
              // margin: 20,
              display: "flex",
              justifyContent: "center",
              borderRadius: 8
            }}
          >
            <Link to="/pilih-locket">
              <Grid container spacing={0}>
                <Grid item xs={3}>
                  <img
                    // align="center"
                    src={AmbilAntrianIcon}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1",
                      boxSizing: " border-box",
                      borderRadius: "20px",
                      height: 108,
                      left: 16,
                      margin: "auto",
                      marginLeft: 38,
                      paddingTop: 20
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    style={{
                      color: "#000000",
                      fontFamily: "Nunito Sans",
                      fontWeight: 500,
                      fontSize: 14,
                      marginTop: "24%",
                      marginLeft: "64%"
                    }}
                  >
                    Ambil Nomor Antrian
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>
        </Grid>
        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
