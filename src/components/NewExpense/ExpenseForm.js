import React, { useState } from "react";

const ExpenseForm = (props) => {
  console.log('New expense form');
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); 
  
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredPrice: '',
  //     enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle === '' || enteredPrice === '' || enteredPrice === 0 || enteredDate === '') {alert('All fields are mandatory.'); return false;}

    const newExpensedata = {
      title: enteredTitle,
      amount: enteredPrice,
      date: enteredDate
    }  

    props.onSubmitExpenseData(newExpensedata);
    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate('');
  }

  const hideExpenseFormHandler = (event) => {
    props.onHide();
  }

  

  return (
    <form onSubmit={submitHandler}>
    <div className="input-section">
      <div className="element-section">
        <label>Enter expense title: </label>
        <input
         type="text" 
         name="expensetitle" 
         value={enteredTitle}
         onChange={titleChangeHandler} 
        />
      </div>
      <div className="element-section">
        <label>Enter price: </label>
        <input
         type="number" 
         name="expenseprice"
         value={enteredPrice}
         onChange={priceChangeHandler} 
        />
      </div>
      <div className="element-section">
        <label>Choose date: </label>
        <input
         type="date"
         name="expensedate"
         value={enteredDate}
         onChange={dateChangeHandler} />
      </div>
      </div>
      <div className="element-btn-section">
        <button type="submit" className="new_expense__button">Submit</button>
        <button className="new_expense__button" onClick={hideExpenseFormHandler}>Cancel</button>
      </div>
      
    </form>
  );
};

export default ExpenseForm;
