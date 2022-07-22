import React, { useRef, useState } from 'react'
import * as Styled from 'components/Jobs/JobSearchForm/JobSearchForm.styled'
import { Props } from 'components/Jobs/JobSearchForm/JobSearchForm.type'

const postedDays = [
  { id: 0, value: '', text: '전체' },
  { id: 1, value: 'today', text: '지난 1일' },
  { id: 2, value: '3days', text: '지난 3일' },
  { id: 3, value: 'week', text: '지난 1주' },
  { id: 4, value: 'month', text: '지난 1달' },
]
const employmentTypes = [
  { id: 0, value: '', text: '전체' },
  { id: 1, value: 'FULLTIME', text: '정규직' },
  { id: 2, value: 'PARTTIME', text: '시간제' },
  { id: 3, value: 'INTERN', text: '인턴' },
  { id: 4, value: 'CONTRACTOR', text: '계약직' },
]

const filterItems = [
  {
    id: 1,
    value: 'posted-day',
    text: '게시일',
  },
  {
    id: 2,
    value: 'employment-type',
    text: '유형',
  },
]

const JobSearchForm = ({ onJobSearchSubmit }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [selectedPostedDay, setSelectedPostedDay] = useState('')
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('')

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const queryData = {
      q: searchInputRef.current!.value,
      start: 0,
      date_posted: selectedPostedDay,
      employment_type: selectedEmploymentType,
    }

    onJobSearchSubmit(queryData)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (name === 'posted-day') {
      setSelectedPostedDay(value)
    }

    if (name === 'employment-type') {
      setSelectedEmploymentType(value)
    }
  }

  const handleFilterItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected = event.currentTarget.textContent

    if (selected) {
      setSelectedFilter(selected)
    }
  }

  const handleSearchInputClearButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = ''
      searchInputRef.current.focus()
    }
  }

  return (
    <Styled.FormWrapper onSubmit={handleFormSubmit}>
      <Styled.SearchInputWrapper>
        <Styled.SearchInputButton type="submit">
          <Styled.AweSomeSearchIcon />
        </Styled.SearchInputButton>
        <Styled.SearchInput ref={searchInputRef} type="text" />
        <Styled.SearchInputClearButton type="button" onClick={handleSearchInputClearButtonClick}>
          <Styled.AweSomeCloseIcon />
        </Styled.SearchInputClearButton>
      </Styled.SearchInputWrapper>

      <Styled.FilterListWrapper>
        <Styled.FilterList>
          {filterItems.map((filterItem) => {
            return (
              <Styled.FilterItem key={filterItem.id}>
                <Styled.FilterItemButton
                  checked={filterItem.text === selectedFilter}
                  type="button"
                  onClick={handleFilterItemClick}
                >
                  {filterItem.text}
                </Styled.FilterItemButton>
              </Styled.FilterItem>
            )
          })}
        </Styled.FilterList>
      </Styled.FilterListWrapper>

      <Styled.RadioInputContainer show={selectedFilter === '게시일'}>
        {postedDays.map((postedDay) => (
          <Styled.RadioInputWrapper key={postedDay?.id}>
            <Styled.RadioInput
              id={`posted-day-${postedDay?.value}-${postedDay?.id}`}
              type="radio"
              name="posted-day"
              value={postedDay?.value}
              onChange={handleInputChange}
            />
            <Styled.RadioInputLabel htmlFor={`posted-day-${postedDay?.value}-${postedDay?.id}`}>
              {postedDay.text}
            </Styled.RadioInputLabel>
          </Styled.RadioInputWrapper>
        ))}
      </Styled.RadioInputContainer>

      <Styled.RadioInputContainer show={selectedFilter === '유형'}>
        {employmentTypes.map((employmentType) => (
          <Styled.RadioInputWrapper key={employmentType?.id}>
            <Styled.RadioInput
              id={`employment-type-${employmentType?.value}-${employmentType?.id}`}
              type="radio"
              name="employment-type"
              value={employmentType?.value}
              onChange={handleInputChange}
            />
            <Styled.RadioInputLabel htmlFor={`employment-type-${employmentType?.value}-${employmentType?.id}`}>
              {employmentType?.text}
            </Styled.RadioInputLabel>
          </Styled.RadioInputWrapper>
        ))}
      </Styled.RadioInputContainer>
    </Styled.FormWrapper>
  )
}

export default JobSearchForm
