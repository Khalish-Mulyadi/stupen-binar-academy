import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Step, Stepper, StepButton, Button, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import TopNavbar from "../TopNavbar/TopNavbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";

const Payment = (props) => {
  let navigate = useNavigate();
  const steps = ["Pilih Metode", "Bayar", "Tiket"];
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <div>
      <TopNavbar />
      <Box sx={{ bgcolor: "#F1F3FF", height: "30vh" }}></Box>
      <Box
        sx={{
          width: "80%",
          p: 3,
          mx: "auto",
          position: "relative",
          top: "-10rem",
        }}
      >
        {/* stepper */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button>
              <ArrowBackRoundedIcon sx={{ color: "#000" }} />
            </Button>
            <Typography variant="h6" fontWeight="bold">
              Pembayaran
            </Typography>
          </Box>
          <Box sx={{ width: "35%" }}>
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            {/* <div>
              {allStepsCompleted() ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                      Next
                    </Button>
                    {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography variant="caption" sx={{ display: "inline-block" }}>
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button onClick={handleComplete}>{completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}</Button>
                      ))}
                  </Box>
                </React.Fragment>
              )}
            </div> */}
          </Box>
        </Box>

        {/* detail order */}
        <Grid container spacing={2} sx={{ backgroundColor: "#ffff", borderRadius: "8px", boxShadow: 3, p: 3 }}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Detail Pesananmu
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Tipe Driver</Typography>
            <Typography variant="body1">Dengan Sopir</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Tanggal</Typography>
            <Typography variant="body1">27 Mar 2022</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Waktu Jemput/Antar</Typography>
            <Typography variant="body1">10.00 WIB</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Jumlah Penumpang (opsional)</Typography>
            <Typography variant="body1">-</Typography>
          </Grid>
        </Grid>

        {/* menu pembayaran */}
        <Grid container spacing={3} sx={{ my: 5 }}>
          <Grid item xs={7}>
            <Box sx={{ bgcolor: "#fff", borderRadius: "8px", boxShadow: 3, p: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Pilih Bank Transfer
              </Typography>
              <Typography variant="subtitle1">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</Typography>
              <List>
                <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                  <ListItemIcon sx={{ width: "100px" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        borderColor: "#D0D0D0",
                        width: "70px",
                      }}
                    >
                      BCA
                    </Button>
                  </ListItemIcon>
                  <ListItemText primary="BCA Transfer" />
                </ListItemButton>
                <Divider />
                <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                  <ListItemIcon sx={{ width: "100px" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        borderColor: "#D0D0D0",
                        width: "70px",
                      }}
                    >
                      BNI
                    </Button>
                  </ListItemIcon>
                  <ListItemText primary="BNI Transfer" />
                </ListItemButton>
                <Divider />
                <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                  <ListItemIcon sx={{ width: "100px" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        borderColor: "#D0D0D0",
                        width: "70px",
                      }}
                    >
                      Mandiri
                    </Button>
                  </ListItemIcon>
                  <ListItemText primary="Mandiri Transfer" />
                </ListItemButton>
                <Divider />
              </List>
            </Box>
          </Grid>

          {/* detail price */}
          <Grid item xs={5}>
            <Box sx={{ bgcolor: "#fff", borderRadius: "8px", boxShadow: 3, p: 3 }}>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: "bold", marginBottom: 0 }}>
                {props.carDetail.name} / {props.carDetail.category}
              </Typography>

              <List sx={{ display: "flex", height: "20px", py: 0, justifyContent: "flex-start" }}>
                <ListItem sx={{ maxWidth: "25%" }} disableGutters>
                  <ListItemIcon sx={{ minWidth: "10px" }}>
                    <PeopleAltOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText secondary="4 orang" sx={{ fontSize: 3, minWidth: 1 }} />
                </ListItem>
                <ListItem sx={{ maxWidth: "25%" }} disableGutters>
                  <ListItemIcon sx={{ minWidth: "10px" }}>
                    <SettingsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText secondary="Manual" sx={{ fontSize: 3, minWidth: 3 }} />
                </ListItem>
                <ListItem sx={{ maxWidth: "30%" }} disableGutters>
                  <ListItemIcon sx={{ minWidth: "10px" }}>
                    <CalendarTodayOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText secondary="Tahun 2020" sx={{ fontSize: 3, minWidth: 3 }} />
                </ListItem>
              </List>

              <Accordion sx={{ boxShadow: 0 }} disableSpacing={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography color={"#000"} fontWeight="bold">
                        Total
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography color={"#000"} fontWeight="bold" textAlign="end">
                        Rp. {props.carDetail.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Harga
                  </Typography>
                  <List dense={true}>
                    <ListItem secondaryAction={<Typography variant="subtitle1">Rp. {props.carDetail.price}</Typography>}>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                      </ListItemIcon>
                      <ListItemText secondary="1 Mobil dengan sopir" />
                    </ListItem>
                  </List>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Biaya Lainnya
                  </Typography>
                  <List dense={true}>
                    <ListItem
                      secondaryAction={
                        <Typography variant="subtitle1" color={"#5CB85F"}>
                          Termasuk
                        </Typography>
                      }
                    >
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                      </ListItemIcon>
                      <ListItemText secondary="Pajak" />
                    </ListItem>
                    <ListItem
                      secondaryAction={
                        <Typography variant="subtitle1" color={"#5CB85F"}>
                          Termasuk
                        </Typography>
                      }
                    >
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                      </ListItemIcon>
                      <ListItemText secondary="Biaya makan sopir" />
                    </ListItem>
                  </List>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Belum Termasuk
                  </Typography>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                      </ListItemIcon>
                      <ListItemText secondary="Bensin" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                      </ListItemIcon>
                      <ListItemText secondary="Tol dan parkir" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Grid container spacing={1} justifyContent="space-around" sx={{ mx: 1, my: 1 }}>
                <Grid item xs={6}>
                  <Typography color={"#000"} fontWeight="bold">
                    Total
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color={"#000"} fontWeight="bold" textAlign="end" marginRight={3}>
                    Rp. {props.carDetail.price}
                  </Typography>
                </Grid>

                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    backgroundColor: "#5CB85F",
                    textTransform: "none",
                    m: 2,
                    width: "100%",
                  }}
                  onClick={() => navigate("invoice")}
                >
                  Bayar
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    carDetail: state.carReducer.carDetail,
  };
};
export default connect(mapStateToProps)(Payment);
