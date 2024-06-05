import type { Dispatch, SetStateAction } from "react";
import { useCallback, useState } from "react";

export default (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  return [value, toggle, setValue] as [boolean, () => void, Dispatch<SetStateAction<boolean>>];
};
