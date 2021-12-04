import React from 'react'
import {makeStyles } from "@mui/styles"
import { Grid, Paper,Card, CardMedia, CardContent, Typography,CardActions,Button} from "@mui/material"
import pix from "../component/img/img.png" 
import {useQuery} from "react-query"
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from "@mui/material/CircularProgress";

const useStyls = makeStyles({
  con:{
    width: "100%",
    height: "calc(100vh - 100px)",
    display: "flex",
    justifyContent:"center",
   flexWrap:"wrap"
   

  },
  card:{
    height: "auto",
    width: "320px",
    margin: "8px",
  },
  pix:{
    height: "200px",
    objectFit: "cover"
  }
})

function Body2() {
  const classes = useStyls()
  const {data, isLoading} = useQuery("store", ()=>{
  const url = "https://fakestoreapi.com/products"
  const res = axios.get(url)

  return res;

  })
  console.log(data)
  return (
    <div>
      <br/>
     <br/>
     <br/>
   <div className={classes.con}>


     {
       isLoading && ( 
         <div>
     
      {/* <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="text" />
      <Skeleton variant="text" /> */}
      <CircularProgress/>
      
         </div>
       )
     }
  
     {
       data?.data?.map((props)=>(
         <div>
           <Card className={classes.card}>
            <CardMedia
            className={classes.pix}
            component ="img"
            image={props.image}
            />
          <CardContent>
            <Typography>{props.title}</Typography>
            <Typography>{props.description}</Typography>

          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" >Buy</Button>
            <Button variant="outlined">Read More</Button>
          </CardActions>
          </Card>
           </div>
       ))
     }
         
        
       
         
        
   </div>
    </div>
  )
}

export default Body2
