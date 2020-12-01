import React from 'react'

const IdCard = (props) => {
    //add the style classes in component

    return(

        <div class="id-card-box">
            <img src={props.picture} alt= "" />

            <div class="id-card-text">
                <p><strong>First Name: </strong>{props.firstName}   </p>
                <p><strong>Last Name:  </strong>{props.lastName}    </p>
                <p><strong>Gender:     </strong>{props.gender}      </p>
                <p><strong>Height:     </strong>{props.height/100}  </p>
                <p><strong>Birth:      </strong>{props.birth}       </p>
            </div>
        </div>

    )
}


export default IdCard