import React from 'react'
import styled from "styled-components"
import {Button, Typography, AppBar, Toolbar, IconButton, Box} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import {makeStyles} from '@mui/styles';
import {NavLink} from "react-router-dom"
import AppsIcon from '@mui/icons-material/Apps';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';

const useStyles = makeStyles({
  box:{
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    borderRadius:"3px",

    "&:hover":{
      cursor: "pointer",
      background: "pink",
    }
  },
  textColor:{
    color: "#ffff",
    fontWeight:"bold"
  },
  navCTR:{
    display: "flex",
  }, 
  tool:{
    display: "flex",
  },
  space:{
    flex: 1,
  },
  navLink:{
textDecoration:"none",
transition: "all 350ms",
borderRadius:"3px",

"&.active":{
  backgroundColor:"rgba(255, 255,255,0.4",
 
}

  },
  myBreak:{

  }
})

function Project1() {
  const classes = useStyles()
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.tool}>
          <div className={classes.navCTR}>

          <NavLink to="/body" className={classes.navLink}>
            <Box className={classes.box}>
            <HomeIcon className={classes.textColor}/>
            <Typography className={classes.textColor}>Home</Typography>
          </Box>
            </NavLink>
            <NavLink to="/body2" className={classes.navLink}>
            <Box className={classes.box}>
            <HomeIcon className={classes.textColor}/>
            <Typography className={classes.textColor}>Blog</Typography>
          </Box>
            </NavLink>
            <NavLink to="/body3" className={classes.navLink}>
            <Box className={classes.box}>
            <AppsIcon className={classes.textColor}/>
            <Typography className={classes.textColor}>more</Typography>
          </Box>
            </NavLink>
            <NavLink to="/formyup" className={classes.navLink}>
            <Box className={classes.box}>
            <AppsIcon className={classes.textColor}/>
            <Typography className={classes.textColor}>Appyup</Typography>
          </Box>
            </NavLink>
            <NavLink to="/satauth" className={classes.navLink}>
            <Box className={classes.box}>
            <AppsIcon className={classes.textColor}/>
            <Typography className={classes.textColor}>Sat=</Typography>
          </Box>
            </NavLink>
            <NavLink to="/create" className={classes.navLink}>
            <Box className={classes.box}>
            <AddCircleOutlineIcon className={classes.textColor}/>
            <Typography className={classes.textColor}>Create</Typography>
          </Box>
            </NavLink>
            <NavLink to="/view" className={classes.navLink}>
            <Box className={classes.box}>
            <ViewAgendaIcon className={classes.textColor}/>
            <Typography className={classes.textColor}>View</Typography>
          </Box>
            </NavLink>
          </div>
            
          
        </Toolbar>
    </AppBar>
      this is project
    </div>
  )
}

export default Project1

const Container = styled.div``

const Nav= styled(NavLink)`
/* 
text-decoration: none;
color: white; */


`
