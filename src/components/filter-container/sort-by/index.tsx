import Select from "react-select"

import { useAppDispatch, useAppSelector } from "../../../store"
import { setSortBy } from "../../../store/search-slice"
import { removeHypen } from "../../../helper"

import styles from "./sort-by.module.css"

export default function SortBy() {
  const dispatch = useAppDispatch()
  const { sortBy } = useAppSelector((state) => state.search)

  const options = [
    { value: 'release-date', label: 'Release Date' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'relevance', label: 'Relevance' }
  ]

   const handleOnChange = (newValue: { value: string } | null) => {
      if (newValue) {
        dispatch(setSortBy(newValue.value as "release-date" | "alphabetical" | "relevance"))
      }
    }
  return (
    <div className={styles.sort_by_container}>
      <p>Sort By</p>
      <Select
        value={options.find((option) => option.value === sortBy) || null}
        onChange={handleOnChange}
        options={options}
        placeholder="All"
        styles={{
          option: (provided: any) => ({
            ...provided,
            color: "#000",
          }),
          control: (provided: any) => ({
            ...provided,
            width: "150px"
          })
        }}
      />
    </div>
  )
}
