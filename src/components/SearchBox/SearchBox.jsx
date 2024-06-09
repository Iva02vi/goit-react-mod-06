import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onInput }) => {
  const searchId = useId();

  const searchInput = (e) => {
    onInput(e.target.value);
  };

  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.input}
        id={searchId}
        type="text"
        value={value}
        onChange={searchInput}
      />
    </div>
  );
};

export default SearchBox;
