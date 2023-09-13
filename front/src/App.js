import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-right" />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/addExpense" element={<AddEdit />}></Route>
          <Route path="/update/:id" element={<AddEdit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
