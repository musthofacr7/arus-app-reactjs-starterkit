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
import PropTypes from "prop-types";
import CardListDokter from "../../component/card-list-dokter";
import { getListDockter } from "../../services/list-dockter";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { getDoctorCategory } from "../../services/doctor-category";

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
  const [categoryTabs, setCategoryTabs] = useState([
    {
      id: 1,
      name: "Semua"
    },
    {
      id: 2,
      name: "Kandungan"
    },
    {
      id: 3,
      name: "Anak"
    },
    {
      id: 4,
      name: "Gigi"
    },
    {
      id: 5,
      name: "Kulit"
    },
    {
      id: 6,
      name: "Penyakit Dalam"
    }
  ]);
  const { classes } = props;
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState([]);
  const [jadwal, setJadwal] = useState([]);

  // useEffect(() => {
  //   const getJadwal = async () => {
  //     const jadwal = await getListDockter();
  //     setJadwal(jadwal);
  //   };
  //   getJadwal();
  // }, []);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);`
  // };

  useEffect(() => {
    const getCategory = async () => {
      const category = await getDoctorCategory();
      setCategory(category);
    };
    getCategory();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    props.history.push("/detail-dokter");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Cek Jadwal Dokter" />

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.gridContent}>
              <Grid item xs={12} className={classes.gridItem}>
                <Grid container spacing={0} className={classes.gridItemOne}>
                  <Grid item xs={8} className={classes.gridField}>
                    <TextField
                      placeholder="Tulis Nama Dokter"
                      InputProps={{
                        disableUnderline: true
                      }}
                      className={classes.TextField}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.gridIcon}>
                    <Button>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.9999 20.9999L16.6499 16.6499"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.gridItemTabs}>
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
                  {category.map(item => {
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

            <Grid item xs={12} className={classes.gridItemList}>
              {jadwal.map(data => {
                return (
                  <CardListDokter
                    spesialis={data.spesialis}
                    nama={data.nama}
                    handleClick={handleClick}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default withRouter(DetailAnggota);
