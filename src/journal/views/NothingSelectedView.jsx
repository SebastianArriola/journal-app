import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const NothingSelectedView = () => {
  return (
    <Grid container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
    >

        <Grid item xs={12}>

            <StarOutline sx={{fontSize: 100, color: "white"}}/>

        </Grid>
        <Grid item xs={12}>

            <Typography color="white" variant="h5">Seleccione o cree una entrada</Typography>

        </Grid>

        </Grid>
  )
}

export default NothingSelectedView