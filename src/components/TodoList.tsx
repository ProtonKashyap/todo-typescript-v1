import React, { useContext } from "react";
import { Todo } from "../model";
import { SingleTodo } from "./SingleTodo";
import { TodosContext } from "../context/Context";

// interface Props {
//   todos: Todo[];
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
// }

export const TodoList = () => {
  const { state } = useContext(TodosContext);
  console.log("State from TodoList", state);
  return (
    <div className="todo">
      {state.map((todo: Todo) => (
        <li>
          <SingleTodo todo={todo} key={todo.id} />
        </li>
      ))}
    </div>
  );
};
