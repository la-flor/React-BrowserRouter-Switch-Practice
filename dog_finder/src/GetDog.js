import React from 'react';
import { useParams } from 'react-router-dom';
import DogProfile from './DogProfile';

function GetDog({dogs}) {
  const {name} = useParams();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogProfile dog={currentDog} />;
  }
  
  return null;
}

export default GetDog;