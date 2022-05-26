import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Container, Typography, Box, InputLabel, InputAdornment, MenuItem, FormControl, Button, Select, TextField } from "@mui/material";
import { PeopleAltOutlined, QueryBuilder, KeyboardArrowDownRounded } from "@mui/icons-material";
import DateAdapterMoment from "@mui/lab/AdapterMoment";
import { LocalizationProvider } from "@mui/lab";
import DatePicker from "@mui/lab/DatePicker";
import { useNavigate } from "react-router-dom";
import CarImage from "../../img/img_car.png";
import getCarData from "../../redux/actions/getCarData";
import getCarDataFiltered from "../../redux/actions/getCarDataFiltered";

const Search = (props) => {
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(null);
  const [passanger, setPassanger] = useState(0);
  const [waktu, setWaktu] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    props.getCarData();
  }, []);
  const handleFilter = () => {
    const carDataFiltered = props.carData.filter((value) => {
      if (value.status === status) {
        return value;
      } else {
        return null;
      }
    });
    props.getCarDataFiltered(carDataFiltered);
    navigate("cars");
  };
  return (
    <div>
      <Grid container spacing={0} sx={{ backgroundColor: "#F1F3FF" }}>
        <Grid item xs={6} sx={{ my: "auto", px: 3 }}>
          <Container>
            <Typography variant="h4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</Typography>
            <Typography width={"75%"}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</Typography>
          </Container>
        </Grid>
        <Grid item xs={6} sx={{ overflow: "hidden" }}>
          <img src={CarImage} alt="" />
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "80%",
          backgroundColor: "#ffff",
          borderRadius: "8px",
          boxShadow: 3,
          p: 3,
          height: "100px",
          top: "-75px",
          position: "relative",
          mx: "auto",
        }}
      >
        <Grid container spacing={2} columns={14}>
          <Grid item xs={3}>
            <Typography>Tipe Driver</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" color="success">
                Pilih Tipe Driver
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Pilih Tipe Driver"
                color="success"
                IconComponent={KeyboardArrowDownRounded}
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
              >
                <MenuItem value={true} color="success">
                  Dengan Sopir
                </MenuItem>
                <MenuItem value={false} color="success">
                  Tanpa Sopir (Lepas Kunci)
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Typography>Tanggal</Typography>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={DateAdapterMoment}>
                <DatePicker
                  label="Pilih Tanggal"
                  value={date}
                  onChange={(datePicked) => {
                    setDate(datePicked);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Typography>Waktu Jemput/Ambil</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" color="success">
                Pilih Waktu
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="success"
                value={waktu}
                label="Pilih Waktu"
                IconComponent={QueryBuilder}
                onChange={(event) => {
                  setWaktu(event.target.value);
                }}
              >
                <MenuItem value={"08.00"} color="success">
                  08.00 WIB
                </MenuItem>
                <MenuItem value={"09.00"} color="success">
                  09.00 WIB
                </MenuItem>
                <MenuItem value={"10.00"} color="success">
                  10.00 WIB
                </MenuItem>
                <MenuItem value={"11.00"} color="success">
                  11.00 WIB
                </MenuItem>
                <MenuItem value={"12.00"} color="success">
                  12.00 WIB
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Typography>Jumlah Penumpang (optional)</Typography>
            <FormControl fullWidth>
              <TextField
                value={passanger}
                id="outlined-number"
                color="success"
                type="number"
                InputLabelProps={{
                  shrink: false,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PeopleAltOutlined />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  setPassanger(event.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2} sx={{ my: "auto" }}>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{
                textTransform: "none",
                backgroundColor: "#5CB85F",
                fontWeight: "bold",
              }}
              onClick={handleFilter}
            >
              Cari Mobil
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carData: state.carReducer.cars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCarData: () => dispatch(getCarData()),
    getCarDataFiltered: (carDataFiltered) => dispatch(getCarDataFiltered(carDataFiltered)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
