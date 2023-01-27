import React from "react";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

import fitness from "../images/fitnessapp.png"
import weather from "../images/weatherapp.png"
import dictionary from "../images/dictionaryapp.png"
import projectback from "../images/myprojects.jpg"

const ProjectsImage = styled.img`
    top:0;  
    position:absolute;
    width: 100%;
    height: 200vh;
    left: 0;
    filter: brightness(40%); 
    object-fit: cover;
    z-index:-1`

export default function MediaCard() {
          return (
            <Grid container spacing={3} columns={8} sx={{padding: 4}}>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 800 }}>
                <ProjectsImage src={projectback}/>
              <CardMedia
                sx={{ height: 375 }}
                image={fitness}
                title="Fitness App"
              /> 
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fitness App
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
                sx={{ height: 375 }}
                image={weather}
                title="Fitness App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Weather App
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
                sx={{ height: 375 }}
                image={dictionary}
                title="Fitness App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dictionary App
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
        </Grid>
          );
        }

