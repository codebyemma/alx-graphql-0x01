export interface InfoProps {
  pages: number
  next: number | null
  prev: number | null
  count: number
}

export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
}

export interface EpisodesResponse {
  episodes: {
    info: InfoProps
    results: EpisodeProps[]
  }
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name' | 'air_date' | 'episode'>