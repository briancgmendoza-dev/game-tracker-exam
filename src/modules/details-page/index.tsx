import { useEffect } from "react"
import { useParams } from "react-router"

import { Heading } from "../../components/heading"
import HeroMessage from "../../components/hero-message"
import Thumbnail from "../../components/thumbnail"
import Button from "../../components/button"
import GameInfo from "../../components/game-info"
import Loading from "../../components/loading"
import SystemRequirements from "../../components/system-requirements"

import { useAppDispatch, useAppSelector } from "../../store"
import { getGame } from "../../store/thunk"

import styles from "./details-page.module.css"

export default function DetailsPage() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { data: game, status, error } = useAppSelector((state) => state.game)

  useEffect(() => {
    dispatch(getGame(params.id ?? ''))
  }, [dispatch, params.id])

  return (
    <section>
      <HeroMessage />
      {status === "loading" && <Loading />}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && game && (
        <>
          <div className={styles.details_page__top_container}>
            <Thumbnail src={game?.thumbnail} alt={game?.title} />
            <div className={styles.details_page__information}>
              <div>
                <Heading text="Requirements" type="h1" />
                <SystemRequirements
                  graphics={game?.minimumSystemRequirements?.graphics}
                  memory={game?.minimumSystemRequirements?.memory}
                  os={game?.minimumSystemRequirements?.os}
                  processor={game?.minimumSystemRequirements?.processor}
                  storage={game?.minimumSystemRequirements?.storage}
                />
              </div>
              <div>
                <GameInfo
                  title={game?.title}
                  description={game?.description}
                />
                <div className={styles.details_page__button_container}>
                  <Button label="Back" url={-1} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details_page__bottom_container}>
            {game?.screenshots.map((screenshot) => (
              <div key={screenshot.id} className={styles.details_page__thumbnail_container}>
                <Thumbnail src={screenshot.image} alt={screenshot.id.toString()} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
