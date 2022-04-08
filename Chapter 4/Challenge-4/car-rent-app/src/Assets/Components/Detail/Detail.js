import React from "react";
import { Grid, Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";
export const Detail = (props) => {
  const carDetail = props.carDetail;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8} sx={{ backgroundColor: "violet", height: 75 }}></Grid>
        <Grid item xs={4} sx={{ backgroundColor: "red", height: 50 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={carDetail.image} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                {carDetail.name} / {carDetail.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success" size="small">
                Lanjutkan Pembayaran
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
