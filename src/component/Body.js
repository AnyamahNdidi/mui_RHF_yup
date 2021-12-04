import React from 'react'
import { Grid, Paper,Card, CardMedia, CardContent, Typography,CardActions,Button} from "@mui/material"
import {makeStyles } from '@mui/styles';
import pix from "../component/img/img.png" 

const useStyls  = makeStyles({
  card:{
  
    
  },
  pix:{
    height: "250px",
    objectFit:"cover"
  },

  button:{
    width: "100px"
  }
})


function Body() {
  const classes = useStyls()


  
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Card className={classes.card}>
            <CardMedia
            className={classes.pix}
            component ="img"
            image={pix}
            />
          <CardContent>
            <Typography>Burger</Typography>
            <Typography>you can play with the documentation theme object in your browser console, as the theme variable is exposed on all the documentation pages. Please note that the</Typography>

          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" >Buy</Button>
            <Button variant="outlined">Read More</Button>
          </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4}>
        <Card className={classes.card}>
            <CardMedia
            className={classes.pix}
            component ="img"
            image={pix}
            />
          <CardContent>
            <Typography>Burger</Typography>
            <Typography>you can play with the documentation theme object in your browser console, as the theme variable is exposed on all the documentation pages. Please note that the</Typography>

          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" >Buy</Button>
            <Button variant="outlined">Read More</Button>
          </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4}>
        <Card className={classes.card}>
            <CardMedia
            className={classes.pix}
            component ="img"
            image={pix}
            />
          <CardContent>
            <Typography>Burger</Typography>
            <Typography>you can play with the documentation theme object in your browser console, as the theme variable is exposed on all the documentation pages. Please note that the</Typography>

          </CardContent>
          <CardActions>
            <Button  className={classes.button} variant="contained" >Buy</Button>
            <Button variant="outlined">Read More</Button>
          </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Body
