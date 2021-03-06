import React from "react";
import TodoItem from "./TodoItem";
import { MSG_NO_ITEMS } from "../text/message";

export default function FilteredList(props) {
  const { items, changeStatus } = props;

  if (items.length === 0) {
    return (
      <p data-testid="alert-text" className="alert alert-info">
        {MSG_NO_ITEMS}
      </p>
    );
  }

  return (
    <ul className="list-unstyled">
      {items.map((item) => (
        <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
      ))}
    </ul>
  );
}
