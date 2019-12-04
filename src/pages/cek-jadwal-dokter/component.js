import React from 'react';
import {
  Typography,
  Grid,
  Container,
  Box,
  CssBaseline,
  TextField,
  Tabs,
  Tab
} from '@material-ui/core';
import AppBar from '../../component/appbar';
import PropTypes from 'prop-types';
// import SearchIcon from '../../assets/search.png';
import Avatar from '../../assets/avatar.png';

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
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

function DetailAnggota(props) {
  const [categoryTabs, setCategoryTabs] = React.useState([
    {
      id: 1,
      name: 'Semua'
    },
    {
      id: 2,
      name: 'Kandungan'
    },
    {
      id: 3,
      name: 'Anak'
    },
    {
      id: 4,
      name: 'Gigi'
    },
    {
      id: 5,
      name: 'Kulit'
    },
    {
      id: 6,
      name: 'Penyakit Dalam'
    }
  ]);
  const { classes } = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                  <Grid item xs={3} className={classes.gridIcon}>
                    {/* <img src={SearchIcon} style={{width: 32}}/> */}
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
                  </Grid>
                  <Grid item xs={1} />
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: '#26CAC0'
                    }
                  }}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {categoryTabs.map(category => {
                    return (
                      <Tab
                        label={category.name}
                        {...a11yProps(0)}
                        className={classes.Tabs}
                        key={category.id}
                      />
                    );
                  })}
                </Tabs>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Grid container spacing={0} className={classes.gridContentList}>
                <Grid item xs>
                  <Grid container spacing={0} className={classes.gridList}>
                    <Grid item xs={2}>
                      <img src={Avatar} />
                    </Grid>
                    <Grid item xs={7}>
                      <Typography>Dr. Jaya Efendi, SP</Typography>
                      <Typography>Spesialis Kandungan</Typography>
                    </Grid>
                    <Grid item xs={2}>
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
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default DetailAnggota;
