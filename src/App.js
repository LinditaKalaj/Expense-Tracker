import Expenses from "./components/Expenses/Expenses";
import expenses from "./expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [currExpenses, setExpenses] = useState(expenses)
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expensesArr={currExpenses} />
    </div>
  );
}

export default App;
