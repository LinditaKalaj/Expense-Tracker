import Expenses from "./components/Expenses/Expenses";
import expenses from "./expenses";

function App() {
  return (
    <div>
      <Expenses expensesArr = {expenses} />
    </div>
  );
}

export default App;
