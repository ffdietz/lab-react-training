import React, { Fragment } from 'react';
import './App.css';
import IdCard from './IdCard/IdCard'
import Greetings from './Greetings/Greetings'


function App() {
  return (

    <Fragment>
      
      <h1>Iteration 1</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      
      <h1>Iteration 2</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>      
      <Greetings lang="es">Amparo</Greetings>
      <Greetings lang="en">Richard</Greetings>
    </Fragment>
  );
}

export default App;
