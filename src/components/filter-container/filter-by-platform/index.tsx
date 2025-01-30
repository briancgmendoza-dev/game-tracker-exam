import SelectOptions from "../../select-options"
import { useAppDispatch, useAppSelector } from "../../../store"
import { setPlatform } from "../../../store/query-slice"

import styles from "./filter-by-platform.module.css"

export default function FilterByPlatform() {
  const dispatch = useAppDispatch()
  const { platform } = useAppSelector((state) => state.query)
  const options = [
    { value: 'all', label: 'All' },
    { value: 'pc', label: 'PC' },
    { value: 'browser', label: 'Browser' }
  ]

  const handleOnChange = (newValue: { value: string } | null) => {
    if (newValue) {
      dispatch(setPlatform(newValue.value))
    }
  }

  return (
    <SelectOptions
      selectorValue={platform ?? ''}
      onChange={handleOnChange}
      options={options}
      placeholder="All"
      text="Filter by Platform"
      className={styles.filter_by_platform__container}
    />
  )
}
