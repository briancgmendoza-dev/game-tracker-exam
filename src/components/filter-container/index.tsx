import FilterByPlatform from "./filter-by-platform";
import FilterByCategory from "./filter-by-category";
import SortBy from "./sort-by";

import styles from "./filter-container.module.css"

export default function FilterContainer() {
  return (
    <div className={styles.filter_container}>
      <FilterByPlatform />
      <FilterByCategory />
      <SortBy />
    </div>
  )
}
