import type { InputHTMLAttributes } from "react";

import styles from "./textFields.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...inputProps }: InputProps) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {inputProps?.required && "*"}
      </label>

      <input className={styles.input} {...inputProps} />
    </div>
  );
};

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea = ({ label, ...textareaProps }: TextAreaProps) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {textareaProps?.required && "*"}
      </label>

      <textarea className={styles.input} {...textareaProps} />
    </div>
  );
};

export default Input;

export { Input, TextArea };
