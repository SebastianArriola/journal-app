import { LoginOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavBar = ({drawerWidth}) => {
  return (
    <AppBar
            position='fixed'
            sx={{width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: { sm: `${drawerWidth}px`}
        }}
        >

            <Toolbar>
                <IconButton color="inherit" sx={{display: {sm: 'none'}}}>

                    <MenuOutlined/>

                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>


                    <Typography>Journal App</Typography>
                    <IconButton color='error'>

                        <LoginOutlined/>

                    </IconButton>


                </Grid>


            </Toolbar>

        </AppBar>
  )
}

export default NavBar