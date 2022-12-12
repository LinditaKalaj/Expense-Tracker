import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [formStatus, setFormStatus] = useState(false)
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormStatus(false)
    }
    function onClickFormHandler(event){
      
      setFormStatus(true)
    }
    function hideForm(){
      setFormStatus(false)
    }
  return (
    <div className="new-expense">
      {!formStatus && <button onClick={onClickFormHandler}>Add NewExpense</button>}
      {formStatus && <ExpenseForm hideForm={hideForm} onSaveExpenseData={onSaveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;
