import React from 'react';
import Card from '../card/card.component'
import './card-list.style.css';

const CardList = (props) => {

// const monsterList = props.monsters.map(monster => {
// return (    
// <Card key={monster.id} monster = {monster}/>
// )});




    return(
        <div className='card-list'>
         {
             props.monsters.map(monster => 
                 (    
                <Card key={monster.id} monster = {monster}/>
                ))
         }
        </div>
    )
}
 
export default CardList;


