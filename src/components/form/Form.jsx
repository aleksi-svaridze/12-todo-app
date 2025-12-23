import { useEffect, useRef } from "react";
import styles from "./form.module.css";

export const Form = ({ inputValue, onChange, addTodo }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <form className={styles.form}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => addTodo(e)}
        type="submit"
        className={styles.button}
      >
        Add
      </button>
    </form>
  );
};
