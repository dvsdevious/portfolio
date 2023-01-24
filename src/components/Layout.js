import React from "react";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import fitness from "../images/fitnessapp.png"
import weather from "../images/weatherapp.png"
import dictionary from "../images/dictionaryapp.png"


export default function MediaCard() {
          return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                <Card sx={{ maxWidth: 700 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={fitness}
                title="Fitness App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fitness App for a personal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={weather}
                title="Fitness App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fitness App for a personal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 800 }}>
              <CardMedia
                sx={{ height: 400 }}
                image={dictionary}
                title="Fitness App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fitness App for a personal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        </Grid> </Grid>
          );
        }

