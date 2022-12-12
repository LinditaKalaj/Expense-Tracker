import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback"><p>No expenses found.</p></h2>
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((index) => (
        <ExpenseItem
          key={index.id}
          title={index.title}
          date={index.date}
          amount={index.amount}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
