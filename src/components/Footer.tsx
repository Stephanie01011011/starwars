import { Container, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <hr />
        <Container sx={{display: 'flex',
  justifyContent: 'space-between', paddingTop: '40px', marginBottom: '40px', alignItems: 'center'}}>

      
      <div className="sitename">
        <Typography variant='h3' color='primary'>Star Wars Adventure</Typography>
      </div>
      <div className="links">
        <Typography variant='body1'>Cookie Policy</Typography>
        <Typography variant='body1'>Privacy Policy</Typography>
        <Typography variant='body1'>Other Data Policy</Typography>
      </div>
      </Container>
    </div>
  )
}

export default Footer
