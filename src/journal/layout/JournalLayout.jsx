import { LoginOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const JournalLayout = ({children}) => {

    const drawerWidth = 240;

  return (
    <Box sx={{display: "flex"}}>

        <NavBar drawerWidth={drawerWidth}/>
        <SideBar drawerWidth={drawerWidth}/>

        <Box component='main'
             sx={{flexGrow: 1, p: 3}}
        >
            <Toolbar/>
            {children}

        </Box>

    </Box>
  )
}

export default JournalLayout