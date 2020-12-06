import configHeader from "./modules/_configHeader";
import { MDCTextField } from "@material/textfield/index";
configHeader();

const textField = [].map.call(document.querySelectorAll(".textField,.textArea"), function (el) {
  return new MDCTextField(el);
});
