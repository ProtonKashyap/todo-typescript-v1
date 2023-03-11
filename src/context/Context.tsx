import { createContext, useReducer, ReactNode, useEffect } from "react";
import { Todo, Actions } from "../model";
import { TodoReducer } from "./Reducer";

interface InitStateType {
  todos: Todo[];
}

let storedTodos: Todo[] = [];

//todos from local storage
const localStorageTodos = localStorage.getItem("todos");

//check if todos are not null
if (localStorageTodos !== null) {
  try {
    storedTodos = JSON.parse(localStorageTodos);
  } catch (error) {
    console.error("Error parsing todos from localStorage:", error);
  }
}
const initState: InitStateType = { todos: storedTodos };

type TodosContextType = {
  state: Todo[];
  dispatch: React.Dispatch<Actions>;
};

export const TodosContext = createContext<TodosContextType>({
  state: initState.todos,
  dispatch: () => null,
});

type Props = {
  children: ReactNode;
};

const TodoContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer<typeof TodoReducer>(
    TodoReducer,
    initState.todos
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
