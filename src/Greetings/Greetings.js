import React from 'react';

const Greetings = props => {
    console.log({props});
    let greet = '';

    switch(props.lang){
        case 'de': greet = "Hallo"; break;
        case 'en': greet = "Hello"; break;
        case 'es': greet = "Hola";  break;
        case 'fr': greet = "Salut"; break;
    }
    
     return (
        <div class= "greetings-box">
            <p>
                {greet} {props.children}
            </p>

        </div>
     )

}

export default Greetings