import React, { useState} from "react";
import './App.css';
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

/*const DUMMY_EXPENSE = [
  {
    id: 1,
    title: "Car insurance",
    amount: 799.49,
    date: new Date(2021, 5, 20),
  },
  {
    id: 2,
    title: "Health insurance",
    amount: 1099.49,
    date: new Date(2021, 8, 15),
  },
  {
    id: 3,
    title: "A book",
    amount: 50.49,
    date: new Date(2019, 12, 31),
  },
  {
    id: 4,
    title: "Topic one",
    amount: 500.0,
    date: new Date(2022, 2, 25),
  },
];*/
const App = () => {
  const [expenses, setExpenses] = useState(false);
  const [filterYear, setFilterYear] = useState("All");

  const addNewExpenseHandler = () => {
    /*setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });*/
    setExpenses(true);
  };

  const changeFilterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }


  // Using core react
  // return React.createElement(
  //   "div",
  //   { class: 'main_body__section' },
  //   React.createElement(
  //     "h2",
  //     { class: 'expense_app__title' }, 'Expense App',
  //     React.createElement(Expense, { items: expenses })
  //   )
  // );

  // preferrable
  return (
    <div className="main_body__section">
      <h2 className="expense_app__title">Expense App</h2>
      <NewExpense onNewExpense={addNewExpenseHandler}/>
      <Expense newexpense={expenses} filterYear={filterYear} onChangeFilterYear={changeFilterYearHandler}/>
    </div>
  );
};

export default App;
