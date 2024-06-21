import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Circle from "../Assets/StatCircle.jpg";
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          width="70"
          image={Circle}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stakeholders
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The cercle is divided into four segments: Producers (15%), Delivery (25%), Storage (20%), 
          and Final Users (40%), illustrating the key stakeholders involved in the hydrogen value chain
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