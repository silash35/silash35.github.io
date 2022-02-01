import { MDCTextField } from "@material/textfield/index";

const configTextFields = (textFields) => {
  textFields.forEach((textField) => new MDCTextField(textField));
};

export default configTextFields;
