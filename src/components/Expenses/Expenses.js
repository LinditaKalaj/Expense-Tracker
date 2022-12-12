import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const onYearSelectedHandler = (yearSelected) => {
    setSelectedYear(yearSelected);
  };
  const filteredExpenses = props.expensesArr.filter(
    (index) => index.date.getFullYear().toString() === selectedYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearSelect={onYearSelectedHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList filteredExpenses = {filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
