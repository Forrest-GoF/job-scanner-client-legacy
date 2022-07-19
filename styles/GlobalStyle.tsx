import { css, Global } from '@emotion/react'
import reset from 'emotion-reset'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}
      `}
    />
  )
}

export default GlobalStyle
