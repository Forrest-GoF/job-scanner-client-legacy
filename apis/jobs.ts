import { PATH, GET } from 'constants/api'
import { requester } from 'apis/requester'
import { Jobs, SearchInput } from 'types/jobs'

export const getJobPost = async (query: SearchInput) => {
  const { q, start, date_posted, employment_type } = query

  const {
    jobs: { search },
  } = PATH

  const response = await requester<Jobs>({
    method: GET,
    url: `${search}?q=${q}${start ? `&start=${start}` : ''}${date_posted ? `&date_posted=${date_posted}` : ''}${
      employment_type ? `&employment_type=${employment_type}` : ''
    }`,
  })

  return response.payload
}
