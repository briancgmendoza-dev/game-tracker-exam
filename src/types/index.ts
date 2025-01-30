export type TRootState<T> = {
  data: T | null
  status: string;
  error: string;
}

export type TGame = {
  id: number
  title: string
  thumbnail: string
  shortDescription: string
  genre: string
  platform: string
  publisher: string
  developer: string
  releaseDate: string
}

export type TGameDetailed = TGame & {
  description: string
  minimumSystemRequirements: TGameMinimumSystemRequirements
  screenshots: TGameScreenshot[]
  status: string
}

export type TGameMinimumSystemRequirements = {
  graphics: string
  memory: string
  os: string
  processor: string
  storage: string
}

type TGameScreenshot = {
  id: number
  image: string
}

export type TGetGamesParams = {
  searchTerm?: string
  platform?: string
  category?: string
  sortBy?: 'release-date' | 'alphabetical' | 'relevance'
}
