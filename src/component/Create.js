import React from 'react'
import { Paper, Button, Typography } from '@mui/material';
import {makeStyles} from "@mui/styles"
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
import {useForm, Controller} from "react-hook-form"
import { useMutation } from 'react-query';

import moment from 'moment';


const useStyles = makeStyles({
 
  Con:{
    display: "flex",
    height: "100%",
    minHeight: "calc(100vh - 100px)",
    justifyContent: "center",
    width: "100%"
  },
paper:{
  height: "500px",
  width: "300px",
  display: "flex",
  flexDirection:"column",
  justifyContent: "space-around",
  alignItems:"center"
},
tetxfiled:{
  width: "250px",
},

})


function Create() {
  

  const classes = useStyles()
  
  const createShema = yup.object().shape({
    fullName:yup.string().required("full name is required"),
    email:yup.string().email().required("put in a valid email"),
    address:yup.string().required("Address needed"),
    dob: yup.date().min(moment().subtract(150, "years")._d).max(moment().subtract(20, "years")._d).required("please put in  valide age"),
    department:yup.string().required("field is required"),
    active:yup.string().required("field is required"),

  })

  const { control, handleSubmit, register, formState:{ errors}} = useForm({
    resolver: yupResolver(createShema)
  })

  const onSubmit =  useMutation ( async (data)=>{
    //   let formData = new FormData();
      
    // formData.append("fullname", data.fullName);
    // formData.append("email", data.email);
    // formData.append("address", data.address)
    // formData.append("dob", data.dob);
    // formData.append("department", data.department);
    // formData.append("active", data.active);
      
      return await axios.post("https://employeeapi-data.herokuapp.com/employee/postt", data);
  });

  const onSubmitData = (data)=>{
    console.log(data)
    onSubmit.mutate(data)
  }


  return (
    <div>
      <br/>
      <br/>
      <br/>
      <div className={classes.Con}>
        <form onSubmit={handleSubmit(onSubmitData)}>
        <Paper className={classes.paper}>
        <TextField
        
          label="Full Name"
          variant="standard"
          {...register("fullName")}
        />
         <Typography>{errors.fullName?.message}</Typography>
        <TextField
        
          label="Email"
         
          variant="standard"
          {...register("email")}
        />
        <Typography>{errors.email?.message}</Typography>
        <TextField
         
          label="Address"
          variant="standard"
          {...register("address")}
        />
        <Typography>{errors.address?.message}</Typography>
       <Controller
      control={control}
      name="dob"
     
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="mm/dd/yyyy"
   
    value={field.value}
    onChange={(e) => field.onChange(e)}
    renderInput={(params) => <TextField  variant="standard" {...register("dob")} {...params} />}
  />
</LocalizationProvider>
      )}
    />
    <Typography>{errors.dob && "must be above 18"}</Typography>
         <TextField
         
          label="DepartMent"
          variant="standard"
          {...register("department")}
        />
        <Typography>{errors.department?.message}</Typography>
         <TextField
         
          label="Active"
          variant="standard"
          {...register("active")}
        />
        <Typography>{errors.active?.message}</Typography>
         <Button type="submit" variant="contained">Create</Button>
        </Paper>
        </form>
    </div>
      
    </div>
  )
}

export default Create
