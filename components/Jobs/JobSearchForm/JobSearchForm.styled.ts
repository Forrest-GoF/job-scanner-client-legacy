import styled from '@emotion/styled'
import { BiX, BiSearch } from 'react-icons/bi'

export const FormWrapper = styled.form`
  width: 100%;
`

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.grey[150]};
`
export const SearchInputClearButton = styled.button`
  width: 50px;
  height: 100%;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
export const SearchInputButton = styled.button`
  width: 50px;
  height: 100%;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export const AweSomeSearchIcon = styled(BiSearch)`
  font-size: 2rem;
`

export const AweSomeCloseIcon = styled(BiX)`
  font-size: 2rem;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 1.2rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(250, 116, 107, 0.77);
  }
`

export const FilterListWrapper = styled.div`
  height: 50px;
`

export const FilterList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
`

export const FilterItem = styled.li`
  flex: 1;
`

export const FilterItemButton = styled.button<{ checked: boolean }>`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid ${({ checked, theme }) => (checked ? theme.color.danger[450] : 'transprent')};
  color: ${({ checked, theme }) => (checked ? theme.color.danger[450] : theme.color.grey[350])};
  cursor: pointer;
`

export const RadioInputContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  height: 50px;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.77);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.77);
`

export const RadioInputWrapper = styled.div``

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid ${({ theme }) => theme.color.danger[150]};
    background-color: ${({ theme }) => theme.color.danger[50]};
    color: ${({ theme }) => theme.color.danger[450]};
  }
`

export const RadioInputLabel = styled.label`
  margin-right: 4px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.color.grey[150]};
  border-radius: 20px;
  color: ${({ theme }) => theme.color.grey[550]};
  cursor: pointer;
`
