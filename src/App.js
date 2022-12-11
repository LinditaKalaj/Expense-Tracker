import Expenses from "./components/Expenses/Expenses";
import expenses from "./expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler = (expense) => {
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expensesArr={expenses} />
    </div>
  );
}

export default App;
