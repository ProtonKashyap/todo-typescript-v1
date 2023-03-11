import React, { useContext, useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { MdOutlineEdit, MdDelete, MdDone } from "react-icons/md";
import "./SingleTodo.css";
import { TodosContext } from "../context/Context";

type Props = {
  todo: Todo;
};
export const SingleTodo = ({ todo }: Props) => {
  const { dispatch } = useContext(TodosContext);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoTitle, setEditTodoTitle] = useState<string>(todo.title);
  //handle done functionality
  const handleDone = (id: number) => {
    dispatch({ type: "done", payload: id });
  };

  //handle delete functionality
  const handleDelete = (id: number) => {
    dispatch({ type: "delete", payload: id });
  };

  //handle edit functionality
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id, newTitle: editTodoTitle } });
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
          required
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
