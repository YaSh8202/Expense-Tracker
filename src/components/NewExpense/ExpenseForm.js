import {useState} from 'react';
import "./ExpenseForm.css";

const ExpenseForm = () => {


  // Here we are using 3state approach
  const [enteredTitle , setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredDate,setEnteredDate] = useState('');

  const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value);
  }

  // This approach can be used instead of above code
  // here we are using 1 state approach, but it is simply not a good practice to update it like this.

  // const [userInput,setUserInput] = useState(
  //   {
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:'',
  //   }
  // );

  // const titleChangeHandler = (event)=>{
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle : event.target.value,
  //   // });

  //   // Instead of changing the object use the prevstate to upadate the value
  //   // React provides the prevState object to the function defined inside setuserinput

  //   setUserInput((prevState)=>{
  //     return {...prevState,enteredTitle:event.target.value};
  //   });

  // };
  // const amountChangeHandler = (event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount : event.target.value,
  //   });
  // }
  // const dateChangeHandler = (event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredDate : event.target.value,
  //   });
  // }

  const submitHandler = (event)=>{
    event.preventDefault();// When a form is submitted , the page gets reloaded and to prevent it we are using preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;