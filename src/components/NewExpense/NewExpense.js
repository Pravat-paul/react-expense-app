import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  console.log('New expense');
  const [expenseFormShow, setExpenseFormShow] = useState(false);

  const saveNewExpenseHandler = async (newExpenseData) => {
    /* 
    //Bottom to top approach 
    const newExpense = {
      ...newExpenseData,
      id: Math.random().toString()
    };

    props.onNewExpense(newExpense);*/
    const response = await fetch("http://localhost/practise/demo_server/expense/add",{
      method: "POST",
      body: JSON.stringify(newExpenseData),
      headers: {
          "Content-type": "text/plain; charset=UTF-8"
      }
    });
    const data = await response.json();
    if(data.success){
      props.onNewExpense();
    }
    else{
      alert(data.error.message);
    }
  };
  
  return (
    <div className="new_expense__section">
      {expenseFormShow && <ExpenseForm onSubmitExpenseData={saveNewExpenseHandler} onHide={() => setExpenseFormShow(false)}/>}
      {!expenseFormShow && <button className="new_expense_btn" onClick={() => setExpenseFormShow(true)}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
