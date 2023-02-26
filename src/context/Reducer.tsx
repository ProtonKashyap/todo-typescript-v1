import { Todo } from "../model";

type Actions =
  | { type: "add"; payload: string }
  | { type: "delete"; payload: number }
  | { type: "done"; payload: number };

export const TodoReducer = (state: Todo[], action: Actions) => {
  const { type, payload } = action;
  switch (type) {
    case "add":
      return [...state, { id: Date.now(), todo: payload, isDone: false }];
    case "delete":
      return state.filter((todo) => todo.id !== payload);
    case "done":
      return state.map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};
