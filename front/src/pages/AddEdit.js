import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  amount: "",
  category: "",
};

const AddEdit = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { title, amount, category } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((res) => setState({ ...res.data }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) {
      toast.error("Fill all fields");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5000/api/post", {
            title,
            amount,
            category,
          })
          .then(() => {
            setState({ title: "", amount: "", category: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Expense added Successfully");
      } else {
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            title,
            amount,
            category,
          })
          .then(() => {
            setState({ title: "", amount: "", category: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Expense updated Successfully");
      }

      setTimeout(() => navigate("/"), 500);
    }
  };
  return (
    <form
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title || ""}
          onChange={handleInputChange}
        ></input>
      </div>

      <div>
        <label htmlFor="Amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount || ""}
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={category || ""}
          onChange={handleInputChange}
        ></input>
      </div>
      <input type="submit" value={id ? "Update" : "Add"}></input>
    </form>
  );
};

export default AddEdit;
