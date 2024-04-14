import { Card, CardContent, Container, Typography } from '@mui/material'
import React from 'react'



function Selectinfo(props: any) {
  return (
    <div className='selectinfo'>
      <Container sx={{
       paddingBottom: '60px'
      }}>
        <Typography variant='h2' sx={{color: 'black', paddingTop: '100px'}}>About Your Selections</Typography>
        <div className="cards">

        <Card variant='outlined' sx={{width: '45%', color: 'black'}}>
            <CardContent>
                <Typography variant='h4' color='primary' sx={{marginTop: '30px'}}>{props.itemChar.name}</Typography>
                <div className="stats">
                    <div className="row">
                <Typography variant='h5' sx={{color: 'black', width: '100px'}}>Gender: <br/> <span style={{fontSize: '16px'}}>{props.itemChar.gender}</span></Typography>
                <Typography variant='h5' sx={{color: 'black', width: '120px'}}>Birth Year:  <br/><span style={{fontSize: '16px'}}>{props.itemChar.birth_year}</span></Typography>
                </div>
                <div className="row">
                <Typography variant='h5' sx={{color: 'black', width: '100px'}}>Height: <br/> <span style={{fontSize: '16px'}}>{props.itemChar.height}</span></Typography>
                <Typography variant='h5' sx={{color: 'black', width: '120px'}}>Weight:  <br/><span style={{fontSize: '16px'}}>{props.itemChar.mass}</span></Typography>
                </div>
                </div>
            </CardContent>
        </Card>


        <Card variant='outlined' sx={{width: '45%'}}>
            <CardContent>
            <Typography variant='h4' color='primary' sx={{marginTop: '30px'}}>{props.itemPlanet.name}</Typography>
            <div className="stats">
                <div className="row">
                <Typography variant='h5' sx={{color: 'black', width: '100px'}}>Climate: <br/><span style={{fontSize: '16px'}}>{props.itemPlanet.climate}</span></Typography>
                <Typography variant='h5' sx={{color: 'black', width: '100px'}}>Population:  <br/><span style={{fontSize: '16px'}}>{props.itemPlanet.population}</span></Typography></div>
                <div className="row">
                <Typography variant='h5' sx={{color: 'black', width: '100px'}}>gravity:  <br/><span style={{fontSize: '16px'}}>{props.itemPlanet.gravity}</span></Typography>
                <Typography variant='h5' sx={{color: 'black', width: '100px'}}>Terrain:  <br/><span style={{fontSize: '16px'}}>{props.itemPlanet.terrain}</span></Typography></div>
                </div>
            </CardContent>
        </Card>
        </div>
      </Container>
    </div>
  )
}

export default Selectinfo
