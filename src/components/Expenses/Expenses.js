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

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterdYear; 
  });

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filterdYear}  onChnageFilter={filterChangeHandler}  />
      {filteredExpenses.map((expense) =>(
          <ExpenseItem
          key={expense.id}
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
