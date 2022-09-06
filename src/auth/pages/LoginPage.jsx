import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink} from 'react-router-dom'
import React from 'react'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo electronico"
                placeholder="correo@gmail.com"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                placeholder="Contraseña"
                type="password"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={12} md={6}>
                <Button variant='contained' fullWidth>Login</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
             
            </Grid>
            <Grid container direction="row" justifyContent="end" sx={{mt: 1}}>

              <Link component={RouterLink} color="inherit" to="/auth/register">Crear una cuenta</Link>

            </Grid>
          </Grid>

        </form>
        </AuthLayout>
  )
}

export default LoginPage