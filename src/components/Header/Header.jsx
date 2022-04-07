import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todo";
import styles from "./header.module.css";

const Header = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch();

  const handleClick = () => {
    if (value[0] === " " || value === "") {
      return;
    }
    dispatch(addTodo(value));
    setValue("");
  };

  const handleEnter = (e) => {
    if (value && e.key === "Enter") {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <div className={styles.head}>
      <input
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleEnter(e)}
        value={value}
        className={styles.inputHead}
        type="text"
        placeholder="Введите дело..."
        autoFocus={true}
      />
      <button onClick={handleClick} className={styles.buttonHead}>
        <span>Добавить</span>
        <div className={styles.liquid}></div>
      </button>
    </div>
  );
};

export default Header;
