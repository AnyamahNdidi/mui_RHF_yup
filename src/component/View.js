import React from 'react'
import { Paper, Typography, Button } from '@mui/material';
import {makeStyles} from "@mui/styles"
import VerifiedIcon from '@mui/icons-material/Verified';
import img from "./1.png"
import {useQuery, useMutation} from "react-query"
import axios from "axios"
import {Link} from "react-router-dom"


const useStyles = makeStyles({
 
  Con:{
    display: "flex",
    height: "100%",
    minHeight: "calc(100vh - 100px)",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap"
  },

  paper:{
    height: "400px",
    width: "280px",
    display: "flex",
    flexDirection:"column",
    padding: "5px",
    margin: "10px"
   
  },

  ConAct:{
    width: "100%",
    height: "90px",
   
    display: "flex",
    justifyContent:"space-between",
    paddingTop:"5px"
  
  },

  imgCon :{
    height: "90px",
    width: "100px",
    background: "pink",
    borderRadius:"5px",
    objectFit:"contain"
    
    
  },
  active:{
    width: "130px",
    height: "30px",
  },
 Nade:{
  width: "100%",
  height: "50px",
  display: "flex",
 flexDirection:"column",
 paddingTop: "5px"
 },
 name:{
   fontWeight: "bold",
   fontSize: "15px"
 },
 mailCon:{
   display: "flex",
   marginTop: "15px"
 },
 bun:{
   
   width: "100%",
   display: "flex",
   justifyContent:"center",
   paddingTop:"5px"
 } ,
 
 bun2:{
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  padding: "10px"
 },
type:{
  fontWeight:"bold"
},
butt:{
  width: "120px"
},
dept:{
  display: "flex",
},
imggg:{
  
  height: "90px",
  width: "100px",
  borderRadius:"5px",

},
link:{
  textDecoration: "none"
}
})

function View() {

  const classes = useStyles()

  const {data, isLoading, isLoadingError} = useQuery("quert", ()=>{
    const url = "https://employeeapi-data.herokuapp.com/employee"
  const res = axios.get(url)
  return res
  });

  const deleteData = useMutation((id)=>{
    axios.delete(`https://employeeapi-data.herokuapp.com/employee/${id}`)
  })
  console.log(data);
 
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <div className={classes.Con}>
        {
          data?.data?.map(({_id, fullName,email,address,dob,department,active})=>(
            <Paper className={classes.paper}>
            <div className={classes.ConAct}>
              <div className={classes.imgCon}>
                <img src={img} className={classes.imggg}/>
                </div>
              <div className={classes.active}>
                Active:<span>{active}</span>
                </div>
            </div>
            <div className={classes.Nade}>
              <div className={classes.name}>{fullName}</div>
              <div className={classes.dept}><Typography>Dept: &nbsp;</Typography>{department}</div>
            </div>
            <div className={classes.mailCon}>
              <VerifiedIcon/>
              <Typography>{email}</Typography>
            </div>
            <br/>
            <div>
            <div className={classes.name}>Address</div>
              <Typography>{address}</Typography>
              </div>
              <br/>
              <div>
              <div className={classes.name}>Date Of Birth</div>
              <Typography>{dob}</Typography>
              </div>
              <div className={classes.bun}>
                <div className={classes.bun2}>
                  <Link to={`/edit/${_id}`} className={classes.link}>
                  <Button variant="outlined" className={classes.butt}>Edit</Button>
                  </Link>
               
                <Button variant="contained" className={classes.butt}
                onClick={()=>{
                  deleteData.mutate(_id)
                  // window.location.reload();
                  console.log(_id)
                }}

                >Remove</Button>
                </div>
              </div>
          </Paper>
          ))
        }
       

      </div>
   
    </div>
  )
}

export default View
