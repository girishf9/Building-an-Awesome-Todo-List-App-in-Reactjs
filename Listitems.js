import React from 'react';
import './listitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <FontAwesomeIcon className="fa=icons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="minus-circle" />
        </span>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="cubic-bezier(0, 0.7, 0.4, 0.1)">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;