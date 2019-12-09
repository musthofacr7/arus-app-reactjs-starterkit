import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '../../component/appbar';
import ListData from '../../component/card-anggota';
import FAB from '../../component/fab';
import { getListAnggota } from '../../services/anggota';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader 
    height={146}
    width={400}
    speed={2}
    primaryColor="#F4F4F4"
    secondaryColor="#ecebeb"
  >
    <rect x="123" y="23" rx="0" ry="0" width="0" height="0" /> 
    <rect x="48" y="59" rx="0" ry="0" width="210" height="48" /> 
    <rect x="311" y="58" rx="0" ry="0" width="64" height="48" />
  </ContentLoader>
)

function ListAnggota(props) {
  const { classes } = props;
  const [anggota, setAnggota] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(anggota);
    const getAnggota = async () => {
      const anggota = await getListAnggota();
      setAnggota(anggota);
    };
    setTimeout(() => {
      getAnggota().then(() => {
        setIsLoading(false);
      });
    }, 3000);
  }, []);

  return (
    <Container maxWidth="xs" className={classes.container}>
      <AppBar goBack title="Anggota Keluarga" />
      {isLoading == true ? (
        <div style={{ marginTop: 70, width: '100%', backgroundColor:'white' }}>
          <MyLoader />
        </div>
      ) : (
        <div className={classes.gridUpper}>
          {anggota.map(data => {
            return (
              <Grid item className={classes.itemList}>
                <ListData
                  nik={data.nik}
                  name={data.nama}
                  click={() => props.history.push(`/list-anggota/${data.id}`)}
                />
              </Grid>
            );
          })}
        </div>
      )}

      <FAB />
    </Container>
  );
}

export default ListAnggota;
