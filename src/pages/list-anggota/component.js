import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "../../component/appbar";
import ListData from "../../component/card-anggota";
import FAB from "../../component/fab";
import { getListAnggota } from "../../services/anggota";
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

  return (
    <Container maxWidth="xs" className={classes.container}>
      <AppBar goBack title="Anggota Keluarga" />
      {isLoading == false ? (
        <Grid item className={classes.itemList}>
          <div className={classes.loader}>
            {listFamily.map(items => {
              return <MyLoader />;
            })}
          </div>
        </Grid>
      ) : (
        <div className={classes.gridUpper}>
          {listFamily.map(items => {
            return (
              <Grid item className={classes.itemList}>
                <ListData
                  handleEdit={() =>
                    props.history.push(`edit-profil-keluarga/${items.id}`)
                  }
                  nik={items.nik}
                  name={items.name}
                  click={() => props.history.push(`/list-anggota/${items.id}`)}
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
