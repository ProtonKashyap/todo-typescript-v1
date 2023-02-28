import React, { useState, useContext } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { TodosContext } from "./context/Context";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const { dispatch } = useContext(TodosContext);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      dispatch({ type: "add", payload: todo });
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">My Todo</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList />
    </div>
  );
};

export default App;
