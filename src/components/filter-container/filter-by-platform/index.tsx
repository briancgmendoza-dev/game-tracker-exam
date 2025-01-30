import Select from "react-select"

import { useAppDispatch, useAppSelector } from "../../../store"
import { setPlatform } from "../../../store/search-slice"
import styles from "./filter-by-platform.module.css"

export default function FilterByPlatform() {
  const dispatch = useAppDispatch()
  const { platform } = useAppSelector((state) => state.search)
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
    <div className={styles.select_container}>
      <p>Filter by Platform</p>
      <Select
        value={options.find((option) => option.value === platform) || null}
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
