import React from 'react'
import  {Button}from "@mui/material"

function MyButton({children, vart,color}) {
  return (
    <div>
      <Button  variant={vart} color={color}>{children}</Button>
    </div>
  )
}

export default MyButton
