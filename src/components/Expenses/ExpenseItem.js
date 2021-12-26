import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = props => {

  return (
    <Card className="expense_module__element">
      <ExpenseDate date={props.date}/>
      <div className="expense_module__title">
        <p>{props.title}</p>
      </div>
      <div className="expense_module__price">
        <button className="expense_price_button">${props.amount}</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
