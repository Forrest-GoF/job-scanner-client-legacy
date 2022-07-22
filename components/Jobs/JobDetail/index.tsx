import * as Styled from 'components/Jobs/JobDetail/JobDetail.styled'
import { Props } from 'components/Jobs/JobDetail/JobDetail.type'

const JobDetail = ({ job }: Props) => {
  return (
    <Styled.JobDetailContainer>
      <Styled.Title>{job?.title}</Styled.Title>
      <Styled.CompanyProfileWrapper>
        <Styled.CompanyProfileImg src={job?.thumbnail} alt="" />
        <Styled.CompanyProfileInfo>
          <Styled.CompanyProfileInfoDesc>{job?.company_name}</Styled.CompanyProfileInfoDesc>
          <Styled.CompanyProfileInfoDesc> {job?.location}</Styled.CompanyProfileInfoDesc>
          <Styled.DescriptionMoreWrapper>
            <Styled.DescriptionMore>{job?.postedAt}</Styled.DescriptionMore>
            <Styled.DescriptionMore>{job?.type}</Styled.DescriptionMore>
          </Styled.DescriptionMoreWrapper>
        </Styled.CompanyProfileInfo>
      </Styled.CompanyProfileWrapper>

      <Styled.Divider />

      <Styled.ButtonWrapper>
        <Styled.ApplyButton href={job?.applyUrl} target="_blank">
          지원하기: {job?.platform}
        </Styled.ApplyButton>
        <Styled.AddCanbanButton type="button" onClick={() => console.log('칸반에 추가')}>
          칸반에 추가
        </Styled.AddCanbanButton>
      </Styled.ButtonWrapper>

      <Styled.Divider />

      <Styled.JobDescriptionWrapper>
        <Styled.JobDescription>{job?.description}</Styled.JobDescription>
      </Styled.JobDescriptionWrapper>
    </Styled.JobDetailContainer>
  )
}

export default JobDetail
