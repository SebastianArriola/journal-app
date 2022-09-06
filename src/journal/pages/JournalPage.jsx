import React from 'react'
import { IconButton, Typography } from '@mui/material'
import JournalLayout from '../layout/JournalLayout'
import NothingSelectedView from '../views/NothingSelectedView'
import NoteView from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'

const JournalPage = () => {
  return (
    <JournalLayout>

      <NothingSelectedView/>  
      {/* <NoteView/> */}
      <IconButton size='large'
        sx={{position: 'fixed',color: "white", backgroundColor: 'error.main',
      ':hover': {backgroundColor: 'error.main', opacity: 0.9}, bottom: 50, right: 50}}
      >

          <AddOutlined sx={{fontSize: 30}}/>

      </IconButton>
  
    </JournalLayout>
  )
}

export default JournalPage