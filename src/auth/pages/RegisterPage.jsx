import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink} from 'react-router-dom'
import React from 'react'
import AuthLayout from '../layout/AuthLayout'

const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
        <form>
          <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                placeholder="Nombre completo"
                type="text"
                fullWidth
              />
            </Grid>
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
            <Grid container sx={{ mt: 3 }} direction="row" justifyContent="center">
              <Grid item xs={12} sm={12} md={8} >
                <Button variant='contained' fullWidth>Crear cuenta</Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end" sx={{mt: 1}}>
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">Ingresar</Link>

            </Grid>
          </Grid>

        </form>
        </AuthLayout>
  )
}

export default RegisterPage