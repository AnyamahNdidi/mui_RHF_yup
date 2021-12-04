import React from 'react'
import {Controller, useForm} from "react-hook-form"
import {Button, TextField, Paper, Typography} from "@mui/material"
import {yupResolver} from "@hookform/resolvers/yup"
import {makeStyles} from "@mui/styles"
import * as yup from "yup"
import {app} from "./base"
import {useNavigate} from "react-router-dom"

const useStyls = makeStyles({
  fomr:{
    display: "flex",
    flexDirection:"column"
  },

  tetxfiled:{
    width: "250px",
  },
  
  con:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight:"calc(100vh - 100px)",
    flexDirection:"column"
  },
  
paper:{
  height: "auto",
  width: "300px",
  display: "flex",
  flexDirection:"column",
  justifyContent: "space-around",
  alignItems:"center"
},
typo:{
  color:"red",
  fontSize: "12px"
}

})

const mySchema = yup.object().shape({
  username:yup.string().required("userName is required"),
  email:yup.string().email().required(),
  phone:yup.number().positive().integer().required(),
  password:yup.string().required().min(6),
  confirmpassword:yup.string().oneOf([yup.ref('password'), null])
})

function Formyup() {
  const Navigate = useNavigate()

  const classes = useStyls()
  const{register, handleSubmit, reset ,formState:{ errors }} = useForm({
    resolver:yupResolver(mySchema)
  })

  const submitUser = async(value)=>{
    console.log(value)
    const {email, password} = value
   await app.auth().createUserWithEmailAndPassword(email, password)
   reset()
   Navigate("/view")
  }

  

  return (
    
    <div className={classes.con}>
      <br/>
      <br/>
      <br/>
      <div>this is you form</div>
      <form className ={classes.fomr}  onSubmit={handleSubmit(submitUser)}>
      <Paper elevation={4} variant="elevation" className={classes.paper} >
        <br/>
      <TextField id="filled-basic" label="UserName" variant="filled"
        className={classes.tetxfiled}
        {...register("username")}
       />
       <Typography className={classes.typo}>{errors.username?.message}</Typography>
       <br/>
      <TextField id="filled-basic" label="e-mail" variant="filled"
      className={classes.tetxfiled}
      {...register("email")}
      />
      <Typography className={classes.typo}>{errors.email?.message}</Typography>
      <br/>
      <TextField id="filled-basic" label="phone" variant="filled"
      className={classes.tetxfiled}
      {...register("phone")}
      />
      <Typography className={classes.typo}>{errors.phone?.message}</Typography>
      <br/>
      <TextField id="filled-basic" label="password" type ="password" variant="filled"
      className={classes.tetxfiled}
      {...register("password")}
      />
      <Typography   className={classes.typo}>{errors.password?.message}</Typography>
      <br/>
      <TextField id="filled-basic" type ="password" label="confirm password" variant="filled" 
      className={classes.tetxfiled}
      {...register("confirmpassword")}
      />
      <Typography className={classes.typo}>{errors.confirmpassword && "password did not martch"}</Typography>
      <br/>
      <Button type="submit" variant="outlined">Register</Button>
      <br/>
</Paper >
      
      </form>
    </div>
  )
}

export default Formyup
