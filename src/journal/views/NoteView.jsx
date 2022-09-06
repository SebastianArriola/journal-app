import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import ImageGallery from '../components/ImageGallery'

const NoteView = () => {
    return (
        <Grid container>
            <Grid container justifyContent="space-between" alignItems='center'>

                <Grid item justifyContent='center' alignItems='center'>

                    <Typography variant='h3' sx={{ fontWeight: "light" }}>6 de Octubre, 2022</Typography>

                </Grid>
                <Grid item justifyContent='center' alignItems='center'>

                    <Button>

                        <SaveOutlined sx={{ mr: 1 }} />
                        <Typography sx={{ fontWeight: "bold" }}>Guardar</Typography>

                    </Button>

                </Grid>
            </Grid>
            <Grid container sx={{ mt: 3 }}>

                <TextField type='text' placeholder='Título' label='Título' variant='filled' fullWidth sx={{ sm: { border: 'none' } }} />
                <TextField type='text' placeholder='¿Qué ha pasado el día de hoy?' multiline variant='filled' fullWidth sx={{ sm: { border: 'none' }, mt: 1 }} minRows={5} />

            </Grid>
            <ImageGallery/>
        </Grid>
    )
}

export default NoteView