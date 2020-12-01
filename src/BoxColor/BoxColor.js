import React from 'react'

const BoxColor = (props) => {

    let rgb = [ props.r, props.g, props.b ];

    return (
        <div>
            <div class="box-color" style={{backgroundColor: `rgb(${rgb})`}}>
                <p>RGB( {props.r}, {props.g}, {props.b}) </p>
            </div>
        </div>
    )
}

export default BoxColor


//// https://blog.cloudboost.io/using-inline-styles-in-jsx-c1d03cbe6fe0