import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodo } from "../../redux/features/todo";

import styles from "./todos.module.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (_id) => {
    dispatch(deleteTodo(_id));
  }
  return (
    <div className="main">
      {todo.map((item) => {
        return (
          <div key={item._id} className="todo">
            <li>
              <input type="checkbox" className={styles.check} />
              <p>{item.text}</p>
              <button
                className={styles.buttonDel}
                onClick={() => handleDelete(item._id)}
              >
                Удалить
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
