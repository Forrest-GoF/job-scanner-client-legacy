import * as Styled from 'components/shared/Button/Button.styled'
import { Props } from 'components/shared/Button/Button.type'

const Button = ({ type, onClick, children }: Props) => {
  return (
    <Styled.Button type={type} onClick={onClick}>
      {children}
    </Styled.Button>
  )
}

export default Button
