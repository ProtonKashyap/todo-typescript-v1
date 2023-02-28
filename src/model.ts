export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}
export type Actions =
  | { type: "add"; payload: string }
  | { type: "delete"; payload: number }
  | { type: "done"; payload: number }
  | { type: "edit"; payload: { id: number; newTitle: string } };
