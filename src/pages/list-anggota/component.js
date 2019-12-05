import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '../../component/appbar';
import ListData from '../../component/card-anggota';
import FAB from '../../component/fab';
import { getListAnggota } from '../../services/anggota';
function ListAnggota(props) {
  const { classes } = props;
  const [anggota, setAnggota] = useState([]);
  useEffect(() => {
    const getAnggota = async () => {
      const anggota = await getListAnggota();
      setAnggota(anggota);
    };
    getAnggota();
  }, []);

  return (
    <Container maxWidth="xs" className={classes.container}>
      <AppBar goBack title="Anggota Keluarga" />

      <Grid container spacing={4} className={classes.gridUpper}>
       
      { anggota.map( data => {
        return(
          <Grid item>
          <ListData
          nik={data.nik} name={data.nama}
          />
        </Grid>
        )
      })  
       }
      </Grid>
      <FAB />
    </Container>
  );
}

export default ListAnggota;
