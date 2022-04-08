import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Homepage = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const showData = (data) => {
    data.map((e) => {
      return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              User ID: {e.userID}
            </Typography>
            <Typography variant="h5" component="div">
              Title
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {e.titile}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
    });
  };

  return <div>{showData(Data)}</div>;
};
