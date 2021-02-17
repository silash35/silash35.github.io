import { MDCTextField } from "@material/textfield/index";

export default () => {
  const textFields = [].map.call(document.querySelectorAll(".textField,.textArea"), (el) => {
    return new MDCTextField(el);
  });

  return textFields;
};
