import { MDCTextField } from "@material/textfield/index";

import configHeader from "./modules/_configHeader";
configHeader();

const textField = [].map.call(document.querySelectorAll(".textField,.textArea"), function (el) {
  return new MDCTextField(el);
});
