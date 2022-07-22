import * as Styled from 'components/Jobs/JobPreviewItem/JobPreviewItem.styled'
import { Props } from 'components/Jobs/JobPreviewItem/JobPreviewItem.type'

const JobPreviewItem = ({ job, onJobPreviewItemClick }: Props) => {
  return (
    <Styled.JobPreviewItemWrapper onClick={() => onJobPreviewItemClick(job)}>
      <Styled.ThumbnailImgWarpper>
        <Styled.ThnmbnailImg src={job?.thumbnail} alt="" />
      </Styled.ThumbnailImgWarpper>
      <Styled.ThumbnailDescriptionWrapper>
        <Styled.ThumbnailJobTitle>{job?.title}</Styled.ThumbnailJobTitle>
        <Styled.ThumbnailJobCompanyName>{job?.company_name}</Styled.ThumbnailJobCompanyName>
        <Styled.ThumbnailJobLocation>{job?.location}</Styled.ThumbnailJobLocation>
        <Styled.ThumbnailJobApplyPlatform>{job?.platform}에 등록된 채용 정보</Styled.ThumbnailJobApplyPlatform>
        <Styled.ThumbnailDescriptionMoreWrapper>
          <Styled.ThumbnailDescriptionMore>{job?.postedAt}</Styled.ThumbnailDescriptionMore>
          <Styled.ThumbnailDescriptionMore>{job?.type}</Styled.ThumbnailDescriptionMore>
        </Styled.ThumbnailDescriptionMoreWrapper>
      </Styled.ThumbnailDescriptionWrapper>
    </Styled.JobPreviewItemWrapper>
  )
}

export default JobPreviewItem
