import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2019');
  const onYearSelectedHandler = (yearSelected) => {
    setSelectedYear(yearSelected);
  }
  return (
    <div>  
      <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onYearSelect={onYearSelectedHandler}/>
        {props.expensesArr.map((index) => (
          <ExpenseItem
            title={index.title}
            date={index.date}
            amount={index.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
