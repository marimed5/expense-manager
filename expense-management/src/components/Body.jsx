import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Body.css";
import dining from "./icons/dining.jpeg";
import groceries from "./icons/grocery.jpeg";
import transport from "./icons/transport.jpeg";
import utilities from "./icons/utilities.webp";
import plus from "./icons/add.png";
import OpenModal from "./OpenModal";
import edit from "./icons/edit.webp";
import bin from "./icons/delete.png";
import other from "./icons/other.png";
import filter from "./icons/filter.png";

function Body() {
  const [expenses, setExpenses] = useState([]);
  const [ModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currExpense, setCurrExpense] = useState(null);
  const [searchDesc, setSearchDesc] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);

  //Fetching list on mount
  useEffect(() => {
    axios
      .get("http://localhost:3000/expenses")
      .then((response) => {
        setExpenses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error in fetching data: ", error);
      });
  });

  //Getting icons for table
  const getIcon = (category) => {
    switch (category) {
      case "Utilities":
        return <img src={utilities} alt="symbol" className="icon" />;
      case "Dining":
        return <img src={dining} alt="symbol" className="icon" />;
      case "Groceries":
        return <img src={groceries} alt="symbol" className="icon" />;
      case "Transport":
        return <img src={transport} alt="symbol" className="icon" />;
      case "Other":
        return <img src={other} alt="symbol" className="icon" />;
      default:
        return null;
    }
  };

  //On adding
  const handleAdd = (newExpense) => {
    axios
      .post("http://localhost:3000/expenses", newExpense)
      .then((response) => {
        setExpenses((prevExpenses) => [...prevExpenses, response.data]);
      })
      .catch((error) => {
        console.log("Error adding new expense: ", error);
      });
  };

  //On deleting
  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      axios
        .delete(`http://localhost:3000/expenses/${id}`)
        .then((response) => {
          setExpenses((prevExpenses) =>
            prevExpenses.filter((expense) => expense.id !== id)
          );
        })
        .catch((error) => console.log("Error deleting: ", error));
    }
  };

  //On editing
  const handleEdit = (id, updatedExpense) => {
    axios
      .put(`http://localhost:3000/expenses/${id}`, updatedExpense)
      .then((response) => {
        setExpenses((prevExpenses) =>
          prevExpenses.map((expense) =>
            expense.id === id ? response.data : expense
          )
        );
      })
      .catch((error) => console.log("Error deleting: ", error));
  };

  //Hit API when inactive search
  const handleSearch = () => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    const timeoutId = setTimeout(() => {
      setOpenFilter(true);
    }, 1000);
    setSearchTimeout(timeoutId);
    setOpenFilter(false);
  };

  //Filter when openFilter is true
  const filteredExpenses = openFilter
    ? expenses.filter((expense) =>
        expense.description.toLowerCase().includes(searchDesc.toLowerCase())
      )
    : expenses;

  return (
    <>
      <header id="mainHeader">
        <nav>
          <h1>Expense Manager</h1>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <h2>Manage Personal Expenses</h2>
      <div className="button-container">
        <button
          id="addButton"
          onClick={() => {
            setCurrExpense(null);
            setModalOpen(true);
          }}
        >
          Add An Expense
          <img src={plus} alt="Add" id="addSign" />
        </button>
        <div className="search">
          <input
            type="search"
            placeholder="Search"
            value={searchDesc}
            onChange={(e) => {
              setSearchDesc(e.target.value);
              handleSearch();
            }}
            id="searchArea"
          />
          <button
            type="submit"
            id="searchButton"
            onClick={() => setOpenFilter(true)}
          >
            Filter
            <img src={filter} alt="filter" id="filterSign" />
          </button>
        </div>
      </div>
      {loading ? (
        <div className="message">Loading...</div>
      ) : expenses.length === 0 ? (
        <div className="message">No data available</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th className="iconsColumn" />
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Edit or Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td className="iconsColumn">{getIcon(expense.category)}</td>
                <td>{expense.description}</td>
                <td> ${expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="editDelete"
                    onClick={() => {
                      setCurrExpense(expense);
                      setModalOpen(true);
                    }}
                  >
                    <img src={edit} className="ud" id="edit" />
                  </button>
                  <button
                    className="editDelete"
                    onClick={() => onDelete(expense.id)}
                  >
                    <img src={bin} className="ud" id="delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <OpenModal
        isOpen={ModalOpen}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        onClose={() => setModalOpen(false)}
        expense={currExpense}
      />
    </>
  );
}

export default Body;
