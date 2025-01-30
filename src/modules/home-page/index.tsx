import SearchBar from "../../components/search-bar";
import FilterContainer from "../../components/filter-container";
import CardContainer from "../../components/card-container";

export default function HomePage() {
  return (
    <section>
      <div>
        <h1>Find & Track the best free-to-play games!</h1>
        <h2>Search for what to play next!</h2>
      </div>
      <SearchBar />
      <FilterContainer />
      <div>
        <CardContainer />
      </div>
    </section>
  )
}
