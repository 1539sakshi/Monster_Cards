import React from 'react';
import Card from "./Card";

function CardLis({monsters}) {
    console.log("This is" ,monsters);
    
  return (
    <div className='card-list'>
      {monsters.map(monster => (
            <Card monster = {monster} />
            )
        )
        }
    </div>
  );

}

export default CardLis;
