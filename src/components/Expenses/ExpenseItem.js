
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card';
// The date.toLocaleString() method is used to convert a date and time to a string.

function ExpenseItem(props) {
  // basically we create a special kind of variable, a variable where changes will lead this component function to be called again

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate> 
      {/* THis line can also be written like 
      <ExpenseDate /> 
    If there is no content b/w the tags*/}
      <div className='expense-item__description'>
        <h2> {props.title} </h2>
        <div className='expense-item__price'>${props.amount}</div> 
      </div>
    </Card>
    </li>
  );
  // you can only return one root element
}

export default ExpenseItem;
