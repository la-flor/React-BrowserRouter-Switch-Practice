import React from 'react';
import { Redirect } from 'react-router-dom';

function DogProfile({dog}) {

  if (!dog) return <Redirect to='/dogs'/>

  return (
    <div className='DogProfile'>
        <img src={dog.src} alt={dog.name} />
        <h2>{dog.name} - {dog.age} years old </h2> 
        
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
    </div>
  );
}

export default DogProfile;