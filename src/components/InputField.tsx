import React from "react";
import "bootstrap/dist/css/bootstrap.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

//const InputField :React.FC<Props>
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <div className="input-group mb-3">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          className="form-control"
          placeholder="Enter  a task..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default InputField;
