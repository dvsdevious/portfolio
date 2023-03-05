import React from "react";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import MyCarousel from "./Carousel"

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
            <Grid container spacing={3} sx={{padding: 4}}>
                <Grid item xs={12} lg={6}>
                <Card sx={{ maxWidth: 800 }}>
                <ProjectsImage src={projectback}/>
              <CardMedia
                sx={{ height: 375 }}
                title="Fitness App"
              > 
                <MyCarousel/>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fitness App
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Website for a small business brand with information about workouts and nutrition.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">GitHub</Button>
                <Button size="small">Demo</Button>
              </CardActions>
            </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
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
                  The weather app with a search engine and live data that allows you to check the weather forecast in any city of the world. 
                </Typography>
              </CardContent>
              <CardActions>
                <a href="https://github.com/dvsdevious/weather-app-react.git"><Button size="small">GitHub</Button></a>
                <a href="https://quizzical-haibt-b7e0fc.netlify.app/"><Button size="small">Demo</Button></a>
              </CardActions>
            </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
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
                  A fully functional React Dictionary Search application with words' definitions, synonyms and images. 
                </Typography>
              </CardContent>
              <CardActions>
                <a href="https://github.com/dvsdevious/dictionary.git"><Button size="small">GitHub</Button></a>
                <a href="https://trusting-shockley-ac2eb6.netlify.app/"><Button size="small">Demo</Button></a>
              </CardActions>
            </Card>
        </Grid> 
        </Grid>
          );
        }

