import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filterdYear, setFilterdYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filterdYear}  onChnageFilter={filterChangeHandler}  />
      {props.items.map((expense) =>(
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
