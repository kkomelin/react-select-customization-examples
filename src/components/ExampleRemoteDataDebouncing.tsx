import debounce from 'lodash.debounce'
import { useRef, useState } from 'react'
import Select, { components, InputActionMeta } from 'react-select'
import ExampleTemplate from './ExampleTemplate'

const performSearchRequest = async (searchText: string) => {
  const response = await fetch(
    `https://countries-api-for-blog.vercel.app/api/countries${
      searchText ? '/' + searchText : ''
    }`
  )
  return await response.json()
}

const ExampleRemoteDataDebouncing = () => {
  const [inputText, setInputText] = useState<string>('')
  const [countries, setCountries] = useState<ICountryOption[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearchDebounced = useRef(
    debounce((searchText) => handleSearch(searchText), 300)
  ).current

  const handleInputChange = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== 'input-blur' && meta.action !== 'menu-close') {
      setInputText(inputText)
      handleSearchDebounced(inputText)
    }
  }

  const handleSearch = async (searchQuery: string) => {
    if (searchQuery.trim().length === 0) {
      setCountries([])
      return
    }

    setIsLoading(true)

    let countries = []
    try {
      countries = await performSearchRequest(searchQuery)
    } catch (e) {
      console.error(e)
    } finally {
      setCountries(countries)
      setIsLoading(false)
    }
  }

  const noOptionsMessage = (obj: { inputValue: string }) => {
    if (obj.inputValue.trim().length === 0) {
      return null
    }
    return 'No matching countries'
  }

  return (
    <ExampleTemplate
      name="9. Search by remote data with debouncing"
      filename="ExampleRemoteDataDebouncing.tsx"
    >
      <Select
        options={countries}
        isClearable={true}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        inputValue={inputText}
        onInputChange={handleInputChange}
        isLoading={isLoading}
        filterOption={null}
        noOptionsMessage={noOptionsMessage}
      />
    </ExampleTemplate>
  )
}

export default ExampleRemoteDataDebouncing

interface ICountryOption {
  label: string
  value: string
  population: number
}

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SearchIcon />
      </components.DropdownIndicator>
    )
  )
}

const SearchIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="38" cy="40" r="20.5" stroke="currentColor" strokeWidth="7" />
    <path
      d="M76.0872 84.4699C78.056 86.4061 81.2217 86.3797 83.158 84.4109C85.0943 82.442 85.0679 79.2763 83.099 77.34L76.0872 84.4699ZM50.4199 59.2273L76.0872 84.4699L83.099 77.34L57.4317 52.0974L50.4199 59.2273Z"
      fill="currentColor"
    />
  </svg>
)

const customStyles = {
  control: (base: any) => ({
    ...base,
    flexDirection: 'row-reverse',
  }),
  clearIndicator: (base: any) => ({
    ...base,
    position: 'absolute',
    right: 0,
  }),
  valueContainer: (base: any) => ({
    ...base,
    paddingRight: '2.3rem',
  }),
}

const formatOptionLabel = (option: ICountryOption) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          flexGrow: '1',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {option.label}
      </div>
      <div style={{ textAlign: 'right', color: 'green' }}>
        {option.population / 1000}m
      </div>
    </div>
  )
}
