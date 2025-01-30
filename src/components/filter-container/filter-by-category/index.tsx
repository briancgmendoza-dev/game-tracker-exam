import Select, { MultiValue } from "react-select"

import { useAppDispatch, useAppSelector } from "../../../store"
import { setSelectedCategories as setCategories } from "../../../store/categories-slice"

import styles from "./filter-by-category.module.css"
import { useState } from "react"

const categoryOptions = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts"
]

export default function FilterByCategory() {
  const dispatch = useAppDispatch()
  const { categories } = useAppSelector((state) => state.categories)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleOnChange = (selected: MultiValue<string>) => {
    const selectedValues = selected.map((item) => (typeof item === 'string' ? item : item['value']))
    setSelectedCategories((prevSelected) => [...prevSelected, ...selectedValues])

    dispatch(setCategories(selectedCategories))
  }

  return (
    <div className={styles.filter_by_container}>
      <p>Filter by Category</p>
      <Select
        isMulti
        value={categories}
        onChange={handleOnChange}
        options={categoryOptions.map((category) => ({ label: category, value: category }))}
        placeholder="Start typing..."
        // getOptionLabel={(e) => e.label}
        // getOptionValue={(e) => e.value}
        isClearable
        closeMenuOnSelect={false}
        styles={{
          option: (provided: any) => ({
            ...provided,
            color: '#000'
          })
        }}
      />
    </div>
  )
}
