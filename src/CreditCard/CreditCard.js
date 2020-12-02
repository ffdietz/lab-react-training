import React from 'react'

const CreditCard = (props) => {

    // let styles = {
    //     margin: '20px',
    //     width: '400px',
    //     height: '220px',
    //     borderRadius: '4px',
    //     backgroundColor: props.bgColor,
    //   };

      return (
        <div>
          <div class="credit-card" style={{backgroundColor: `${props.bgColor}`}}>
          {/* <div class="credit-card" style={styles}> */}
              <p>
                  {props.type}
              </p>
              <h2>
                  {props.number}
              </h2>              
              <p>
                  Expire {props.expirationMonth}/{props.expirationYear}
                    {'     '}
                  {props.bank}
              </p>
              <p>
                  {props.owner}
              </p>

          </div>
        </div>
      )
}

export default CreditCard

