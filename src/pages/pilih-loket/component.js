import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '../../component/appbar';
import BoxCategoryLocket from '../../component/Box-category-loket';
import BottomNavigation from '../../component/bottom-navigation';
import { Link } from 'react-router-dom';
import Modal from '../../component/modal-pilih-loket';
import { getListLoket } from '../../services/loket-category';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    height={146}
    width={400}
    speed={2}
    primaryColor="#7c4747"
    secondaryColor="#ecebeb"
  >
    <rect x="123" y="23" rx="0" ry="0" width="0" height="0" />
    <rect x="30" y="41" rx="0" ry="0" width="86" height="86" />
    <rect x="149" y="42" rx="0" ry="0" width="189" height="29" />
    <rect x="149" y="94" rx="0" ry="0" width="189" height="29" />
  </ContentLoader>
);
function PilihLocket(props) {
  const [open, setOpen] = useState(false);
  const [loket, setLoket] = useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(loket);
    const getLoket = async () => {
      const loket = await getListLoket();
      setLoket(loket);
    };
    setTimeout(() => {
      getLoket().then(() => {
        setIsLoading(false);
      });
    }, 3000);
  }, []);
  const { classes } = props;

  return (
    <Container maxWidth="xs" className={classes.Container}>
      <AppBar goBack title="Pilih Loket Antrian" />

      {loket.map(item => {
        return (
          <div>
            <Grid container spacing={4} className={classes.gridUpper}>
              <Link className={classes.link} onClick={handleOpen}>
                <Grid item>
                  <BoxCategoryLocket title={item.loket} />
                </Grid>
              </Link>
            </Grid>

            <Modal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          </div>
        );
      })}
      <BottomNavigation />
    </Container>
  );
}

export default PilihLocket;
