import styled from '@emotion/styled'

export const JobPreviewItemWrapper = styled.li`
  display: flex;
  padding: 20px;
  margin: 1px;
  border: 0.5px solid black;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0x #000000;
    box-shadow: 0px 0px 10px 0px #000000;
  }
`

export const ThumbnailImgWarpper = styled.div`
  margin-right: 20px;
`

export const ThnmbnailImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.grey[150]};
`

export const ThumbnailDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ThumbnailJobTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight[16]};
  color: ${({ theme }) => theme.color.black};
`

export const ThumbnailJobCompanyName = styled.p`
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight.middle};
  line-height: ${({ theme }) => theme.lineHeight[14]};
  color: ${({ theme }) => theme.color.black};
`

export const ThumbnailJobLocation = styled.p`
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight.middle};
  line-height: ${({ theme }) => theme.lineHeight[14]};
  color: ${({ theme }) => theme.color.grey[450]};
`

export const ThumbnailJobApplyPlatform = ThumbnailJobLocation

export const ThumbnailDescriptionMoreWrapper = styled.span`
  display: flex;
`

export const ThumbnailDescriptionMore = styled.p`
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight[12]};
  color: ${({ theme }) => theme.color.grey[450]};
`
