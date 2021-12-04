import React from 'react'
import {Controller, useForm} from "react-hook-form"
import {Button, TextField} from "@mui/material"



function Body3() {

  const {register, control, handleSubmit} = useForm()

  const onSubmit =(value)=>{
    console.log(value)
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
    <form  onSubmit={handleSubmit(onSubmit)} >
    <TextField id="outlined-basic" label="userName" variant="outlined" 
    {...register("userNmae", {required:true, minLength:5})}
    />
    <TextField id="outlined-basic" label="Email" variant="outlined"
     {...register("email", {required:true,})}
  
    />
     <TextField id="outlined-basic" label="password" variant="outlined"
     {...register("password", {required:true,})}
  
    />
    <Button variant="outlined" type="submit">Submit</Button>
      
    </form>
    </div>
  )
}

export default Body3
