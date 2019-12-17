import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "../../component/appbar";
import NotFound from "../../assets/NotFound.png";
import PropTypes from "prop-types";
import { getDokter } from "../../services/dokter";
import { categoryTab } from "../../services/dokter";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CardListDokter from "../../component/card-list-dokter";

function TabPanel(props) {
  const { classes, children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

function DetailAnggota(props) {
  const { classes } = props;
  const [value, setValue] = useState(0);
  const [listDokter, setListDokter] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  const [tab, setTab] = useState([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    const categoryDoctor = async () => {
      const tabPanel = await categoryTab();
      setTab(tabPanel.row.data);
    };
    categoryDoctor();

    const cardDokter = async () => {
      const cardList = await getDokter();
      setListDokter(cardList.row.data);
      setListFilter(cardList.row.data);
    };
    cardDokter();
  }, []);

  const handleChange = (event, newValue) => {
    if (newValue == 0) {
      setValue(newValue);
      setListFilter(listDokter);
    } else {
      setValue(newValue);
      const filter = listDokter.filter(dokter => {
        return dokter.doctor_category_id == newValue;
      });
      setListFilter(filter);
      console.log(value);
    }
  };
  const handleClick = () => {};

  const allTabs = () => {
    setValue(0);
  };

  console.log(value);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Cek Jadwal Dokter" />

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.gridOne}>
              <Grid item xs className={classes.search}>
                <Box className={classes.box}>
                  <Grid item xs>
                    <Button>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                          stroke="#25282B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 17.5L13.875 13.875"
                          stroke="#25282B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </Grid>
                  <TextField
                    placeholder="Tulis Nama Dokter"
                    InputProps={{
                      disableUnderline: true
                    }}
                    className={classes.TextField}
                  />
                  <Button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6024 1.66666 10 1.66666C5.39763 1.66666 1.66667 5.39762 1.66667 9.99999C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
                        stroke="#25282B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 7.5L7.5 12.5"
                        stroke="#25282B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 7.5L12.5 12.5"
                        stroke="#25282B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid item xs className={classes.gridTabs}>
              <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#26CAC0"
                  }
                }}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab
                  label="Semua"
                  {...a11yProps(0)}
                  className={classes.Tabs}
                  key={0}
                />
                {tab.map(item => {
                  return (
                    <Tab
                      label={item.name}
                      {...a11yProps(0)}
                      className={classes.Tabs}
                      key={item.id}
                    />
                  );
                })}
              </Tabs>
            </Grid>
          </Grid>

          <Grid item xs={10} className={classes.gridRiwayat}>
            <Typography className={classes.textBottom}>
              Hasil Pencarian di{" "}
              <b style={{ color: "#25282B" }}> Poli Kandungan </b>
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.gridRiwayat}>
            <Typography className={classes.textNumber}>( 2 )</Typography>
          </Grid>
          {listDokter.length > 0 ? (
            <Grid>
              {listFilter.map(item => {
                return (
                  <CardListDokter
                    spesialis={item.specialist}
                    nama={item.name}
                    handleClick={() => {
                      props.history.push(`/cek-jadwal-dokter/${item.id}`);
                    }}
                  />
                );
              })}
            </Grid>
          ) : (
            <Grid container className={classes.image}>
              <img src={NotFound} alt="" />
              <Grid item xs={12} className={classes.text}>
                <Typography style={{ textAlign: "center" }}>
                  Maaf kami tidak menemukan dokter yang anda cari.
                </Typography>
              </Grid>

              <Grid item xs={12} className={classes.gridButton}>
                <Box className={classes.boxButton}>
                  <Button
                    disableRipple={false}
                    className={classes.button}
                    style={{ backgroundColor: "#F7A647" }}
                    onClick={allTabs}
                  >
                    <Typography style={{ textTransform: "none" }}>
                      Cari Dokter di Semua Poli
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default withRouter(DetailAnggota);
