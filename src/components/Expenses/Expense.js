import React, { useState, useEffect } from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from '../Filter/ExpenseFilter';
import Progress from "../Filter/Progress";

const Expense = (props) => {
  console.log('Expensess');
  
  //const [filterYear, setFilterYear] = useState("All");
  const [expenses, setExpenses] = useState([]);
  const [years, setYears] = useState([]);
  //const [newexpense, setNewexpense] = useState(props.item)

  useEffect(() => {
    fetchExpenses(props.filterYear);
  }, [props.filterYear, props.newexpense]);

  const changeFilteredYearHandler = selectedYear => {
    //setFilterYear(selectedYear);
    props.onChangeFilterYear(selectedYear);
  };
  //const filteredExpenses = props.items.filter(expense => filterYear != 'All' ? expense.date.getFullYear().toString() === filterYear : expense);
  const fetchExpenses = async (filterYear) => {
    const response = await fetch('http://localhost/practise/demo_server/expense/get/' + filterYear);
    const data = await response.json();
    const expenseList = data.data.expenses.map((expense) => {
      return {
        id: expense.id,
        title: expense.title,
        amount: expense.amount,
        date: new Date(expense.created_at)
      }
    });
    setExpenses(expenseList);
    const yearList = data.data.summary.map((item) => item.year);
    setYears(yearList);    
  }

  return (
    <Card className="expense_module__section">
      <ExpenseFilter
       selected={props.filterYear} 
       onChangeFilteredYear={changeFilteredYearHandler}
       years={years}
      />
      {expenses.length && <Progress expenses={expenses}/>}
      {expenses.length ? expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}/>
        )
      )
      : <p className="noRecords">No records found!</p>}
    </Card>
  );
};

export default Expense;
