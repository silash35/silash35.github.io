import type { InputHTMLAttributes } from "react";

import styles from "./textField.module.scss";

interface Props {
  text: string;
  textareaProps?: InputHTMLAttributes<HTMLTextAreaElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const TextField = ({ text, inputProps, textareaProps }: Props) => {
  return (
    <label className={styles.textfield}>
      {textareaProps ? (
        <textarea placeholder=" " {...textareaProps} />
      ) : (
        <input placeholder=" " {...inputProps} />
      )}
      <span>
        {text}
        {(inputProps?.required || textareaProps?.required) && "*"}
      </span>
    </label>
  );
};

export default TextField;
