import React from "react";
import { connect } from "react-redux";
import { Container, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useNavigate } from "react-router-dom";

const Content = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {props.carDataFiltered.map((e, i) => {
            return (
              <Grid item md={3} key={i}>
                <Card>
                  <CardMedia component="img" width="auto" image={e.image} sx={{ maxHeight: "20vh" }} alt="car_image" />
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
                        navigate(`${e.id}`);
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
    carDataFiltered: state.carReducer.carsFiltered,
    carDetail: state.carReducer.carDetail,
  };
};

export default connect(mapStateToProps)(Content);
