import React from "react";
import "./Progress.css";
import ProgressInMonth from "./ProgressInMonth";


const Progress = (props) => {
  const DUMMY_PROGRESS = [
  {
    id: 1,
    month: "Jan",
    value: 0,
  },
  {
    id: 2,
    month: "Feb",
    value: 0,
  },
  {
    id: 3,
    month: "Mar",
    value: 0,
  },
  {
    id: 4,
    month: "Apr",
    value: 0,
  },
  {
    id: 5,
    month: "May",
    value: 0,
  },
  {
    id: 6,
    month: "Jun",
    value: 0,
  },
  {
    id: 7,
    month: "Jul",
    value: 0,
  },
  {
    id: 8,
    month: "Aug",
    value: 0,
  },
  {
    id: 9,
    month: "Sep",
    value: 0,
  },
  {
    id: 10,
    month: "Oct",
    value: 0,
  },
  {
    id: 11,
    month: "Nov",
    value: 0,
  },
  {
    id: 12,
    month: "Dec",
    value: 0,
  },
];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    DUMMY_PROGRESS[expenseMonth].value += parseFloat(expense.amount);
  }

  const Values = DUMMY_PROGRESS.map(item => item.value);
  const maxValue = Math.max(...Values);

  return (
    <div className="expense_module__progress">
      <div className="exprense_progress__month_extra">
        {DUMMY_PROGRESS.map((item) => (
          <ProgressInMonth
            key={item.id}
            month={item.month}
            value={item.value}
            maxValue={maxValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Progress;
