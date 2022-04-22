import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import getCarData from "../../redux/actions/getCarData";
import getCarDetail from "../../redux/actions/getCarDetail";

const Content = (props) => {
  useEffect(() => {
    props.getCarData();
  }, []);

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {props.carData.map((e) => {
            return (
              <Grid item md={3}>
                <Card>
                  <CardMedia component="img" height="auto" width="auto" image={e.image} alt="car_image" />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {e.name} / {e.category}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      Rp {e.price} / hari
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 2 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <List>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          <PeopleAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="4 orang" />
                      </ListItem>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manual" />
                      </ListItem>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tahun 2020" />
                      </ListItem>
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        backgroundColor: "#5CB85F",
                        textTransform: "none",
                        marginLeft: 1,
                        width: 300,
                      }}
                      onClick={() => {
                        props.getCarDetail(e);
                        console.log(e);
                      }}
                    >
                      Pilih Mobil
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carData: state.carReducer.cars,
    carDetail: state.carReducer.carDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCarData: () => dispatch(getCarData()),
    getCarDetail: () => dispatch(getCarDetail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
