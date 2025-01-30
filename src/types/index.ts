export type TRootState = {
  data: TGame[] | null;
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

export type TGetGamesParams = {
  searchTerm?: string
  platform?: string
  category?: string
  sortBy?: 'release-date' | 'alphabetical' | 'relevance'
}
