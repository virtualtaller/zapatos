import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({img,model,desc,price}) {
  return (
    <Card className='carta' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <div className="d-flex justify-content-between align-items-center bajocarta">
        <div className="d-flex align-items-center">
          <Button size="small" color="primary">
            99USD
          </Button>
        </div>
        <div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
   
    </Card>
  );
}