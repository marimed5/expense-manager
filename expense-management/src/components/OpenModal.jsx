import React, { useState, useEffect } from "react";
import "./OpenModal.css";

function OpenModal({ isOpen, handleAdd, handleEdit, onClose, expense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (expense) {
        setDescription(expense.description);
        setAmount(expense.amount);
        setDate(expense.date);
        setCategory(expense.category);
      } else {
        setDescription("");
        setAmount("");
        setDate("");
        setCategory("");
      }
    }
  }, [expense, isOpen]);

  if (!isOpen) return null;

  //On submitting of modal
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expense ? expense.id : new Date().getTime().toString(),
      description,
      amount: parseFloat(amount),
      date,
      category,
    };

    if (expense) {
      handleEdit(expense.id, newExpense);
    } else {
      handleAdd(newExpense);
    }

    onClose();
  };

  return (
    <div className="layout">
      <div className="modal">
        {expense ? <h2>Edit Expense</h2> : <h2>Add New Expense</h2>}
        <form onSubmit={handleSubmit}>
          <div>
            Description:
            <input
              type="text"
              value={description}
              placeholder="Ex. Netflix Subsciption"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            Amount:
            <input
              type="number"
              value={amount}
              placeholder="Ex. 10"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option value="Groceries">Groceries</option>
              <option value="Dining">Dining</option>
              <option value="Transport">Transport</option>
              <option value="Utilities">Utilities</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="button" id="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" id="addExpense">
            {expense ? "Save Changes" : "Add Expense"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default OpenModal;
