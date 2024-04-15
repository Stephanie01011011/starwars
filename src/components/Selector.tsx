import { Button, Typography, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Selectinfo from './Selectinfo';


function Selector() {
    const [characterName, setCharacterName] = useState({name: 'N/A'});
    const [character, setCharacter] = useState(false);
    const [planet, setPlanet] = useState(false);
    const [planetName, setPlanetName] = useState({name: "N/A"});
    const [show, setShow] = useState(false);

    useEffect(() => {
        let index = Math.floor((Math.random() * 30)+1);
        axios.get(`https://swapi.dev/api/people/${index}`).then(res => {
            let characterInfo = res.data;
            setCharacterName(characterInfo);
  
    })}, [character]);

    useEffect(() => {
        let index = Math.floor((Math.random() * 20) + 1);
        axios.get(`https://swapi.dev/api/planets/${index}`).then(res => {
            let planetInfo = res.data;
            setPlanetName(planetInfo);

    })}, [planet])

        
    
    function handleClickChar(){
            setCharacter(!character);
 
        }

        function handleClickPlanet(){
            setPlanet(!planet);
        }
  return (
    <div className='selector'>
        {!show && 
        <div className="displaymsg">
        <Typography variant='h2' sx={{
            marginBottom: '30px'
        }}>See Where The Universe Will Take You</Typography>
        <Button variant='contained' sx={{padding: '20px', width: '400px', marginBottom: '60px'}} onClick={() => {setShow(true)}}>Start Your Adventure</Button>
        </div>
        }
        {show &&
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-around'}}>

              
        <div className="character">
        <Typography variant='h4' sx={{marginBottom: '30px'}}>Character Selection</Typography>
     

      {characterName &&
      <Typography variant='h2' sx={{marginBottom: '60px'}}>{characterName.name}</Typography>}

<Button variant='outlined' onClick={handleClickChar} sx={{marginBottom: '60px'}}>Pick New Character</Button>
        </div>


        <div className="planet">
        <Typography variant='h4' sx={{marginBottom: '30px'}}>Planet Selection</Typography>
     

      {planetName &&
      <Typography variant='h2' sx={{marginBottom: '60px'}}>{planetName.name}</Typography>}

<Button variant='outlined' onClick={handleClickPlanet} sx={{marginBottom: '60px'}}>Pick New Planet</Button>
        </div>

   
        </Container>
        
}
{show &&
<Selectinfo itemChar={characterName} itemPlanet={planetName}/>
}
    </div>
  )
}

export default Selector
