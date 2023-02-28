import { createContext, useReducer, ReactNode } from "react";
import { Todo, Actions } from "../model";
import { TodoReducer } from "./Reducer";

interface InitState {
  todos: Todo[];
}

const initState: InitState = { todos: [] };

type TodoContextState = {
  state: Todo[];
  dispatch: React.Dispatch<Actions>;
};

export const TodosContext = createContext<TodoContextState>({
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
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
