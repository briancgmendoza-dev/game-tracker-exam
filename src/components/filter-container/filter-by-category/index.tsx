import SelectOptions from "../../select-options"

import { useAppDispatch, useAppSelector } from "../../../store"
import { setCategory } from "../../../store/query-slice"

import styles from "./filter-by-category.module.css"

const options = [
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
  const { category } = useAppSelector((state) => state.query)

  const formattedOptions = options.map(option => ({
    value: option,
    label: option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')  // Capitalize first letter and replace hyphen with space
  }));

  const handleOnChange = (newValue: { value: string } | null) => {
    if (newValue) {
      dispatch(setCategory(newValue.value))
    }
  }

  return (
    <SelectOptions
      selectorValue={category ?? ''}
      onChange={handleOnChange}
      options={formattedOptions}
      placeholder="Start typing..."
      text="Filter by Category"
      className={styles.filter_by_category__container}
    />
  )
}
