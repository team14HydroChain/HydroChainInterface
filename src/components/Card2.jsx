import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TokenValue from "../Assets/TokenValue.jpg";
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={TokenValue}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Token Value
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The token's value curve starts at 0 in month 1, 
          then gradually increases with a slow start, rapid acceleration, 
          and eventual flattening out. The inflection point is around month 40, 
          where growth accelerates, and the curve reaches a plateau at around month 80, 
          stabilizing at approximately 140
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