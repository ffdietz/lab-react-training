import React from 'react';

const Random = props => {

    //console.log({props});

    let randomNumber = Math.floor(Math.random(props.min) * props.max);
    
     return (
        <div class= "text-box">
            <p>
                Random number between {props.min} and {props.max} :  {randomNumber}
            </p>

        </div>
     )

}

export default Random