import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense_module_date">
      <p className="expense_date__month">{month}</p>
      <p className="expense_date__year">{year}</p>
      <p className="expense_date__day">{day}</p>
    </div>
  );
};

export default ExpenseDate;
