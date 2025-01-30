import FilterByPlatform from "./filter-by-platform";
import FilterByCategory from "./filter-by-category";
import SortBy from "./sort-by";

export default function FilterContainer() {
  return (
    <div>
      <FilterByPlatform />
      <FilterByCategory />
      <SortBy />
    </div>
  )
}
