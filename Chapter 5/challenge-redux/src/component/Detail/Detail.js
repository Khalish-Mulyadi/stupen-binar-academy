import React from "react";
import { AccordionDetails, AccordionSummary, Accordion, Box, ListItemText, ListItemIcon, ListItem, List, Grid, Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const Detail = (props) => {
  const carDetail = props.carDetail;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={8} sx={{ justifyItems: "end", display: "grid" }}>
          <Box
            sx={{
              width: "85%",
              backgroundColor: "#ffff",
              borderRadius: "8px",
              boxShadow: 3,
              p: 3,
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Tentang Paket
            </Typography>
            <Typography variant="body1">Include</Typography>

            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText secondary="Apa saja yang termasuk dalam paket misal durasi max 12 jam" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText secondary="Sudah termasuk bensin selama 12 jam" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText secondary="Sudah termasuk Tiket Wisata" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText secondary="Sudah termasuk pajak" />
              </ListItem>
            </List>

            <Typography variant="body1">Exclude</Typography>

            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText secondary="Tidak termasuk biaya makan sopir Rp 75.000/hari" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText secondary="Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText secondary="Tidak termasuk akomodasi penginapan" />
              </ListItem>
            </List>

            <Accordion sx={{ boxShadow: 0, marginLeft: -3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{ height: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Refund, Reschedule, Overtime
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ marginLeft: -2 }}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "20px" }}>
                      <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                    </ListItemIcon>
                    <ListItemText secondary="Tidak termasuk biaya makan sopir Rp 75.000/hari" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "20px" }}>
                      <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                    </ListItemIcon>
                    <ListItemText secondary="Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "20px" }}>
                      <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                    </ListItemIcon>
                    <ListItemText secondary="Tidak termasuk akomodasi penginapan" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Button
            variant="contained"
            color="success"
            sx={{
              backgroundColor: "#5CB85F",
              textTransform: "none",
              m: 2,
              display: "grid",
              justifyItems: "end",
            }}
          >
            Lanjutkan Pembayaran
          </Button>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image={carDetail.image} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold", marginBottom: 0 }}>
                {carDetail.name} / {carDetail.category}
              </Typography>

              <List sx={{ display: "flex", height: "20px", py: 0, justifyContent: "flex-start" }}>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "10px" }}>
                    <PeopleAltOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText secondary="4 orang" sx={{ fontSize: 10, minWidth: "10px" }} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "10px" }}>
                    <SettingsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText secondary="Manual" sx={{ fontSize: 10, minWidth: 3 }} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "10px" }}>
                    <CalendarTodayOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText secondary="Tahun 2020" sx={{ fontSize: 10, minWidth: 3 }} />
                </ListItem>
              </List>
              <Grid container justifyContent="space-between" paddingTop={5} spacing={3}>
                <Grid item md={6}>
                  <Typography variant="body1">Total</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography variant="body1" textAlign="right" fontWeight={"bold"}>
                    Rp {carDetail.price}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="success"
                sx={{
                  backgroundColor: "#5CB85F",
                  textTransform: "none",
                  m: 2,
                  width: "100%",
                }}
              >
                Lanjutkan Pembayaran
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
