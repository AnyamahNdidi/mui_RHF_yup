import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as yup from "yup"

function Test2() {
  const initialValues = { 
    userName:"",
    email:"",
    password:""
  }

  const  mySchema = yup.object().shape({
    userName: yup.string().required("Please fill this Field"),
    email:yup.string().email().required(),
    password:yup.string().required().min(6, "password needed")
  })
  return (
    <div>
      this is test
      <Formik
      initialValues={initialValues}
      validationSchema={mySchema}
      onSubmit={(value)=>{
        console.log(value)
      }}

      >
        <Form>
          <Field type="userName" name="userName"/>
          <ErrorMessage name="userName" component="div"/>
          <Field type="email" name="email"/>
          <ErrorMessage name="email" component="div"/>
          <Field type="password" name="password"/>
          <ErrorMessage name="password" component="div"/>
          <button type="submit">Submit</button>
        </Form>
      
      </Formik>
    </div>
  )
}

export default Test2
