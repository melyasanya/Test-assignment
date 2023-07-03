import { useDispatch } from "react-redux";

import Select from "react-select";

import { changeFilterValue } from "../../redux/users/usersSlice";
import { options } from "./SelectorOptions";

export const Selector = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    if (e.value === options[0].value) {
      dispatch(changeFilterValue(e.value));
    } else if (e.value === options[2].value) {
      dispatch(changeFilterValue(e.value));
    } else if (e.value === options[1].value) {
      dispatch(changeFilterValue(e.value));
    }
  };

  return (
    <Select
      options={options}
      defaultValue={options[0]}
      onChange={handleOnChange}
    />
  );
};
