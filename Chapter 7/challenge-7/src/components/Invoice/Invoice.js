import React, { useState } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import Footer from "../Footer/Footer";

// material ui components
import { Grid, Box, Button, Typography, Stepper, Step, StepButton } from "@mui/material";

// react pdf viewer
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// icons
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Invoice = () => {
  const steps = ["Pilih Metode", "Bayar", "Tiket"];
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

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
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <TopNavbar />

      {/* Stepper and Nav */}
      <Box
        sx={{
          bgcolor: "#F1F3FF",
          height: "15vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} alignItems="center" sx={{ width: "80%" }}>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button>
                <ArrowBackRoundedIcon sx={{ color: "#000" }} />
              </Button>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Tiket
                </Typography>
                <Typography variant="subtitle2">Order ID: xxxxxx</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ ml: "auto", width: "75%" }}>
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* pdf viewer */}
      <Box width="50%" height="50vh" my={5} mx="auto">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
          <Viewer fileUrl="/test.pdf" plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </Box>
      <Footer />
    </div>
  );
};

export default Invoice;
