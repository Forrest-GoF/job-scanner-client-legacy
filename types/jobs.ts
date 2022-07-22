export type Job = {
  applyUrl: string
  company_name: string
  description: string
  id: string
  location: string
  platform: string
  postedAt: string
  thumbnail: string
  title: string
  type: string
}

export type Jobs = {
  crawling_url?: string
  data: Job[]
}

export type SearchInput = {
  q: string
  start?: number | string
  date_posted?: string
  employment_type?: string
}
