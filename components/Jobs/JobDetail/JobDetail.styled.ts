import styled from '@emotion/styled'

export const JobDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-height: 100%;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 2rem;
`

export const CompanyProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`

export const CompanyProfileImg = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.grey[250]};
`

export const CompanyProfileInfo = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.color.grey[550]};
`

export const CompanyProfileInfoDesc = styled.p``

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 20px 0;
`

export const DescriptionMoreWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const DescriptionMore = styled.p``

export const ApplyButton = styled.a`
  flex: 1;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color.danger[450]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.danger[450]};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight[14]};
  opacity: 0.8;
  text-align: center;
  text-decoration: none;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`
export const AddCanbanButton = styled.button`
  flex: 1;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color.danger[450]};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.danger[450]};
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight[14]};
  opacity: 0.8;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export const JobDescriptionWrapper = styled.div`
  margin: 20px 0;
`

export const JobDescription = styled.p`
  white-space: pre-wrap;
`

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background-color: black;
`
