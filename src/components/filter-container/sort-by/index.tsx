import SelectOptions from "../../select-options"

import { useAppDispatch, useAppSelector } from "../../../store"
import { setSortBy } from "../../../store/query-slice"

import styles from "./sort-by.module.css"

export default function SortBy() {
  const dispatch = useAppDispatch()
  const { sortBy } = useAppSelector((state) => state.query)

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
    <SelectOptions
      selectorValue={sortBy ?? ''}
      onChange={handleOnChange}
      options={options}
      placeholder="All"
      text="Sort By"
      className={styles.sort_by__container}
    />
  )
}
