import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "../../component/appbar";
import ListData from "../../component/card-anggota";
import FAB from "../../component/fab";
import { getListAnggota } from "../../services/anggota";
import Typography from "@material-ui/core/Typography";
import NotFound from "../../assets/NotFound.png";
import ContentLoader from "react-content-loader";
import { updateAnggota } from "../../services/anggota";

const MyLoader = () => (
  <ContentLoader
    height={106}
    width={400}
    speed={2}
    primaryColor="#F4F4F4"
    secondaryColor="#ecebeb"
  >
    <rect x="20" y="23" rx="0" ry="0" width="0" height="0" />
    <rect x="20" y="29" rx="0" ry="0" width="210" height="48" />
    <rect x="310" y="32" rx="0" ry="0" width="64" height="48" />
  </ContentLoader>
);

function ListAnggota(props) {
  const { classes } = props;
  const [listFamily, setlistFamily] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleEdit = id => {};

  useEffect(() => {
    const getAnggota = async () => {
      const family = await getListAnggota(user.id);

      setlistFamily(family.row);
    };

    setTimeout(() => setIsLoading(true), 2500);
    getAnggota();
  }, []);

  console.log(listFamily.length);

  return (
    <Container maxWidth="xs" className={classes.container}>
      <AppBar goBack title="Anggota Keluarga" />

      <div>
        {isLoading == false ? (
          <Grid item className={classes.itemList}>
            <div className={classes.loader}>
              <div>
                <MyLoader />
              </div>
            </div>
          </Grid>
        ) : (
          <div className={classes.gridUpper}>
            {listFamily.length === 0 ? (
              <Grid container className={classes.image}>
                <img src={NotFound} alt="" />
                <Grid item xs={12} className={classes.text}>
                  <Typography style={{ textAlign: "center" }}>
                    Maaf kami tidak menemukan dokter yang anda cari.
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              // <div style={{ marginTop: 200 }}>not found</div>
              listFamily.map(items => {
                return (
                  <Grid item className={classes.itemList}>
                    <ListData
                      handleEdit={() =>
                        props.history.push(
                          `/edit-profil-keluarga/${items.user_id}/family/${items.id}`
                        )
                      }
                      nik={items.nik}
                      name={items.name}
                      click={() =>
                        props.history.push(`/list-anggota/${items.id}`)
                      }
                    />
                  </Grid>
                );
              })
            )}
          </div>
        )}
      </div>

      <FAB />
    </Container>
  );
}

export default ListAnggota;
