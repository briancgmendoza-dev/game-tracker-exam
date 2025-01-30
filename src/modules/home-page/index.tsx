import SearchBar from "../../components/search-bar";
import FilterContainer from "../../components/filter-container";
import CardContainer from "../../components/card-container";

import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { getGames } from "../../store/thunk";
import HeroMessage from "../../components/hero-message";

export default function HomePage() {
  const dispatch = useAppDispatch()
  const { searchTerm } = useAppSelector((state) => state.search)

  useEffect(() => {
    dispatch(getGames(searchTerm))
  }, [dispatch, searchTerm])

  return (
    <section>
      <HeroMessage />
      <SearchBar />
      <FilterContainer />
      <div>
        <CardContainer />
      </div>
    </section>
  )
}
