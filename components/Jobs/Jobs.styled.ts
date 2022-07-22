import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

export const JobPreviewListContainter = styled.div`
  width: 400px;
  max-height: calc(100vh - 150px);
  overflow-y: scroll;
`

export const JobPreviewList = styled.ul`
  min-height: calc(100vh - 150px);
  border-right: 1px solid black;
`

export const JobDetailContainer = styled.div`
  position: relative;
  width: calc(100% - 400px);
  max-height: calc(100vh - 150px);
  overflow-y: scroll;
`

export const JobDetailWrapper = styled.div`
  flex: 1;
  margin: 14px;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 4px 0px #000000;
  box-shadow: 0px 0px 4px 0px #000000;
`
