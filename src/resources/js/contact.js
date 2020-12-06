import configHeader from "./modules/_configHeader";
import { MDCTextField } from "@material/textfield/index";
configHeader();

const textField = [].map.call(document.querySelectorAll(".textField"), function (el) {
  return new MDCTextField(el);
});

const textArea = [].map.call(document.querySelectorAll(".textArea"), function (el) {
  return new MDCTextField(el);
});
