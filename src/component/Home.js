import React from 'react'
import styled from "styled-components"
import  {Button}from "@mui/material"
import MyButton  from './MyButton'
import {AiOutlineFolderView} from "react-icons/ai"
import PreviewIcon from '@mui/icons-material/Preview';
import { Checkbox } from '@mui/material';

function Header() {
  const [ data, setData] = React.useState(true)
  return (
    <Container>
      <Wrapper>
        this is home
        <Button variant="outlined"  style={{fontSize:"20px"}} >THIS IS TESTING</Button>
        <br/>
        <Button variant="contained" startIcon={<PreviewIcon/>}  >THIS IS TESTING</Button>
        <br/>
        <MyButton  vart="contained" color="secondary">edwin</MyButton>
        <br/>
        <MyButton vart="outlined" primary="primary">Judith</MyButton>
          <Checkbox
          value={data}
          onChange={()=>{
            setData(!data)
          }}
          />
        <Button 

        disabled={data}
        variant="contained" 
        primary="primary">Submit</Button>
        
      </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`

width: 100%;
height: 100%;
min-height: calc(100vh - 100px);
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
min-height: calc(100vh - 100px);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
