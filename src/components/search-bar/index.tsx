import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "../../store";
import { setSearchTerm } from "../../store/search-slice";
import styles from "./search-bar.module.css"

export default function SearchBar() {
  const dispatch = useAppDispatch()
  const { searchTerm } = useAppSelector((state) => state.search)
  const [inputValue, setInputValue] = useState(searchTerm)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedSearchTerm(inputValue)
    }, 500)

    return () => clearTimeout(debounce)
  }, [inputValue])

  useEffect(() => {
    if (debouncedSearchTerm !== searchTerm) {
      dispatch(setSearchTerm(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch, searchTerm])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value)
  };

  return (
    <div className={styles.search_bar}>
      <div className={styles.input_wrapper}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.magnifier_icon} />
        <input
          type="text"
          placeholder="Search by Name..."
          className={styles.search_bar__input}
          value={inputValue}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  )
}
