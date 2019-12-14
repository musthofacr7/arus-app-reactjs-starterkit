import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Profile from '../../assets/avatar.png';
import AmbilNomor from '../../component/ambil-nomor-antrian';
import CekJadwalDokterHome from '../../component/cek-jadwal-dokter-home';
import { getAntrian } from '../../services/loket';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    height={746}
    width={400}
    speed={2}
    primaryColor='#e6e6e6'
    secondaryColor='#f4f4f4'
  >
    <rect x='34' y='26' rx='0' ry='0' width='57' height='47' />
    <rect x='113' y='27' rx='0' ry='0' width='255' height='47' />
    <rect x='62' y='101' rx='0' ry='0' width='255' height='47' />
    <rect x='133' y='167' rx='0' ry='0' width='120' height='99' />
    <rect x='62' y='290' rx='0' ry='0' width='255' height='47' />
    <rect x='37' y='376' rx='0' ry='0' width='68' height='68' />
    <rect x='140' y='387' rx='0' ry='0' width='186' height='32' />
    <rect x='36' y='478' rx='0' ry='0' width='68' height='68' />
    <rect x='142' y='493' rx='0' ry='0' width='186' height='32' />
  </ContentLoader>
);

function HomePage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [loket, setLoket] = useState('');
  const { classes } = props;
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getData = async () => {
      const antrian = await getAntrian(user.id);
      setData(antrian.row.data);
      if (antrian.row.data[0].queue_number == 1) {
        setLoket('A');
      } else if (antrian.row.data[0].queue_number == 2) {
        setLoket('B');
      } else if (antrian.row.data[0].queue_number == 3) {
        setLoket('C');
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <Container maxWidth='xs' className={classes.container}>
      {isLoading == true ? (
        <div
          style={{
            marginTop: 70,
            width: '100%',
            backgroundColor: 'white'
          }}
        >
          <MyLoader />
        </div>
      ) : (
        <div>
          <Grid container spacing={0} className={classes.gridContainer}>
            <Grid item xs className={classes.gridOne}>
              <Grid
                container
                spacing={0}
                align='center'
                className={classes.containerProfil}
              >
                <Grid item xs={2} className={classes.image} align='center'>
                  <img src={Profile} alt='avatar' />
                </Grid>
                <Grid item xs={0} className={classes.gridName}>
                  <Typography className={classes.name}>{user.name}</Typography>
                  <Typography className={classes.nik}>
                    NIK: {user.nik}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {data.length > 0 && (
              <Grid item xs={12} className={classes.gridTwo}>
                <Grid className={classes.antrian} align='center'>
                  <Grid item xs={2} className={classes.gridText}>
                    <Typography
                      className={classes.nomorAntrian}
                      onClick={() => console.log(data)}
                    >
                      Nomor Antrian Anda
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className={classes.gridNumb}>
                    <Typography className={classes.nomor}>
                      {data[0].queue_number} {loket}
                    </Typography>
                    <Typography className={classes.locket}>
                      Loket {loket}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.gridLocket}>
                    <Box className={classes.box}>
                      <Typography className={classes.estimasi}>
                        Estimasi di panggil pukul
                        <strong className={classes.waktu}> 14:00 </strong> WIB
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
          <div style={{ padding: '10px 20px' }}>
            <AmbilNomor />
          </div>
          <div style={{ padding: '10px 20px', marginBottom: 50 }}>
            <CekJadwalDokterHome />
          </div>
        </div>
      )}
    </Container>
  );
}

export default HomePage;
