import { useState } from 'react';

import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card';
// The date.toLocaleString() method is used to convert a date and time to a string.

function ExpenseItem(props) {

  const [title,setTitle]=useState(props.title);//usestate is called React hook
  // basically we create a special kind of variable, a variable where changes will lead this component function to be called again

  const clickHandler = ()=>{
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate> 
      {/* THis line can also be written like 
      <ExpenseDate /> 
      If there is no content b/w the tags*/}
      <div className='expense-item__description'>
        <h2> {title} </h2>
        <div className='expense-item__price'>${props.amount}</div> 
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
  // you can only return one root element
}

export default ExpenseItem;
