import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@material-ui/core";
import { CardActionArea } from "@mui/material";
import headshot from "../../lib/images/macHeadshot.jpeg";


export default function ActionAreaCard({ name }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={headshot} alt="mac" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${name.firstName} ${name.lastName}`}
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Button variant="contained"> Edit Photo </Button>

            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Button variant="outlined"> Change Password </Button>

            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
