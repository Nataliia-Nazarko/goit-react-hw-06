import { useId } from "react";
import css from "./SearchBox.module.css";
import { FcSearch } from "react-icons/fc";

const SearchBox = ({ value, onSearch }) => {
  const search = useId();
  return (
    <label className={css.searchBox}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        id={search}
      />
      <span className={css.icon}>
        <FcSearch />
      </span>
    </label>
  );
};

export default SearchBox;
