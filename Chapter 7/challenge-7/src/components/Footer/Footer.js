import { Grid, Typography, Container, Box, Link } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={0} sx={{ marginTop: "20vh" }}>
          <Grid item xs={4} sx={{ px: 3 }}>
            <Container>
              <Typography color={"#000"} sx={{ py: 1 }}>
                Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000
              </Typography>
              <Typography color={"#000"} sx={{ py: 1 }}>
                binarcarrental@gmail.com
              </Typography>
              <Typography color={"#000"} sx={{ py: 1 }}>
                081-233-334-808
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={2}>
            <Link href="/#" underline="hover" color="inherit">
              <Typography color={"#000"} sx={{ py: 1, fontWeight: "bold" }}>
                Our services
              </Typography>
            </Link>
            <Link href="/#" underline="hover" color="inherit">
              <Typography color={"#000"} sx={{ py: 1, fontWeight: "bold" }}>
                Why us
              </Typography>
            </Link>
            <Link href="/#" underline="hover" color="inherit">
              <Typography color={"#000"} sx={{ py: 1, fontWeight: "bold" }}>
                Testimonial
              </Typography>
            </Link>
            <Link href="/#" underline="hover" color="inherit">
              <Typography color={"#000"} sx={{ py: 1, fontWeight: "bold" }}>
                FAQ
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Typography color={"#000"}>Connect with us</Typography>
            <Box sx={{ justifyContent: "space-around", marginTop: 3 }}>
              <span className="facebook-icon"></span>
              <span className="instagram-icon"></span>
              <span className="twitter-icon"></span>
              <span className="email-icon"></span>
              <span className="twitch-icon"></span>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography color={"#000"}>Copyright Binar 2022</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
