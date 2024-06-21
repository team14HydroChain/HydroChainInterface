import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Diagram from "../Assets/diagram.png";
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Diagram}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dubai Hydrogen Valley
          </Typography>
          <Typography variant="body2" color="text.secondary">
          High-Pressure Tube Trailers Capacity: 2,000 kg Hydrogen
          <br />
          Location: Industrial Area CO2 Emission: 0.8 kg CO2/kg Hydrogen stored
          <br />
          Number of Tokens: 480
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}