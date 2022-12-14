import { TurnedInNot } from '@mui/icons-material'
import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

const SideBar = ({ drawerWidth }) => {
    return (
        <Box component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >

            <Drawer
                variant='permanent'
                open
                sx={{

                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }

                }}
            >

                <Toolbar>

                    <Typography variant='h6' noWrap component='div'>Sebastian Arriola</Typography>
                </Toolbar>
                <List>

                    {['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (

                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>

                                    <ListItemText primary={text} />
                                    <ListItemText secondary="Sint Lorem velit non veniam sit. Insum lorem velit" />

                                </Grid>
                            </ListItemButton>
                        </ListItem>

                    ))}

                </List>



            </Drawer>

        </Box>
    )
}

export default SideBar