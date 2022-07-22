import { Job } from 'types/jobs'

export type Props = {
  job: Job
  onJobPreviewItemClick: (job: Job) => void
}
