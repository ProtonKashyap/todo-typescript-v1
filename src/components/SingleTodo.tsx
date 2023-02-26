import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { MdOutlineEdit, MdDelete, MdDone } from "react-icons/md";
import "./SingleTodo.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoTitle, setEditTodoTitle] = useState<string>(todo.title);
  //handle done functionality
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //handle delete functionality
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  //handle edit functionality
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, title: editTodoTitle } : todo
      )
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodoTitle}
          ref={inputRef}
          className="todos__single--title"
          onChange={(e) => setEditTodoTitle(e.target.value)}
        ></input>
      ) : todo.isDone ? (
        <s className="todos__single--title">{todo.title}</s>
      ) : (
        <span className="todos__single--title">{todo.title}</span>
      )}

      <div
        className="icon"
        onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(true);
          }
        }}
      >
        <MdOutlineEdit />
      </div>
      <div className="icon" onClick={() => handleDelete(todo.id)}>
        <MdDelete />
      </div>
      <div className="icon" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </div>
    </form>
  );
};
