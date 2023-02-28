import { Todo } from "../model";
import { Actions } from "../model";

export const TodoReducer = (state: Todo[], action: Actions) => {
  const { type, payload } = action;
  switch (type) {
    case "add":
      return [...state, { id: Date.now(), title: payload, isDone: false }];
    case "delete":
      return state.filter((todo) => todo.id !== payload);
    case "done":
      return state.map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "edit":
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, title: payload.newTitle } : todo
      );
    default:
      return state;
  }
};
