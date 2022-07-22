import type { NextPage } from 'next'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import * as Styled from 'components/Jobs/Jobs.styled'
import JobPreviewItem from 'components/Jobs/JobPreviewItem'
import JobDetail from 'components/Jobs/JobDetail'
import JobSearchForm from 'components/Jobs/JobSearchForm'
import { getJobPost } from 'apis/jobs'
import { Jobs, Job, SearchInput } from 'types/jobs'

const JobsPage: NextPage = () => {
  const [query, setQuery] = useState<SearchInput>({
    q: '',
    start: 0,
    date_posted: '',
    employment_type: '',
  })

  const { data: jobs } = useQuery<Jobs>(['getJobPost', query], () => getJobPost(query), {
    enabled: Object.values(query).some((value) => value),
  })

  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const handleJobSearchSubmit = (newQuery: SearchInput) => {
    setQuery(newQuery)
    if (!query?.q || newQuery?.q !== query?.q) {
      setSelectedJob(null)
    }
  }

  const handleJobPreviewItemClick = (job: Job) => {
    setSelectedJob(job)
  }

  return (
    <Styled.Container>
      <JobSearchForm onJobSearchSubmit={handleJobSearchSubmit} />
      <Styled.JobPreviewListContainter>
        <Styled.JobPreviewList>
          {jobs?.data.map((job) => (
            <JobPreviewItem key={job?.id} job={job} onJobPreviewItemClick={handleJobPreviewItemClick} />
          ))}
          {jobs?.data.map((job) => (
            <JobPreviewItem key={job?.id} job={job} onJobPreviewItemClick={handleJobPreviewItemClick} />
          ))}
        </Styled.JobPreviewList>
      </Styled.JobPreviewListContainter>
      <Styled.JobDetailContainer>
        <Styled.JobDetailWrapper>{selectedJob && <JobDetail job={selectedJob} />}</Styled.JobDetailWrapper>
      </Styled.JobDetailContainer>
    </Styled.Container>
  )
}

export default JobsPage
