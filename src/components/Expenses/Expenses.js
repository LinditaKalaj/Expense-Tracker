import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
    {props.expensesArr.map((index) =>(
        <ExpenseItem title = {index.title} date = {index.date} amount = {index.amount}/>
    ))}
    </Card>
  );
}

export default Expenses;
