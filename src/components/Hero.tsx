import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import Nav from './Nav'

function Hero() {
  return (
    <div className='hero'>
        <Container sx={{
            
        }}>
            <Nav />
        <div className="heroText"><Typography variant='h3'>In A Galaxy Far, Far Away...</Typography>
        <Typography variant='body1' sx={{
            marginBottom: '40px', marginTop: '15px'
        }}>Choose your own journey! Pick a random character and planet and you can decide your fate. Will Yoda survive a fight on Naboo? Will Jabba return from Alderaan? Use the Star Wars character and planet picker to come up with fun situations to entertain yourself.</Typography>
        <Button variant='contained' href='https://www.starwars.com/news/star-wars-movies-and-series-guide'>Read Star Wars Guide</Button>
        </div>

      
      </Container>
    </div>
  )
}

export default Hero
