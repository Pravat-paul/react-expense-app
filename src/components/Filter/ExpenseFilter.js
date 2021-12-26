import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = props => {
    const filterYearHandler = event => {
        props.onChangeFilteredYear(event.target.value);
    }
    return (
        <div className="expense_module__filter">
            <div className="expense_filter__title">
                <h4>Filter by year</h4>
            </div>
            <div className="expense_filter__dropdown">
                <select className="expense_filter__year" onChange={filterYearHandler}>
                    <option>All</option>
                    {props.years.map((year) => <option key={year}>{year}</option>)}
                </select>
            </div>
        </div>        
    )
};

export default ExpenseFilter;