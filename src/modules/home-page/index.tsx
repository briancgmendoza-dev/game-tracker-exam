import SearchBar from "../../components/search-bar";
import FilterContainer from "../../components/filter-container";
import CardContainer from "../../components/card-container";

import { useAppDispatch } from "../../store";
import { useEffect } from "react";
import { getGames } from "../../store/thunk";

export default function HomePage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])

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
