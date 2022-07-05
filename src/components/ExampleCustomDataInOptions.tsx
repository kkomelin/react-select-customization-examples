import { useState } from 'react'
import Select, { components, InputActionMeta } from 'react-select'
import ExampleTemplate from './ExampleTemplate'

const ExampleCustomDataInOptions = () => {
  const [inputText, setInputText] = useState<string>('')

  const handleInputChange = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== 'input-blur' && meta.action !== 'menu-close') {
      setInputText(inputText)
    }
  }

  return (
    <ExampleTemplate name="Display custom data in options">
      <Select
        options={countriesLocal}
        isClearable={true}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
        styles={customStyles}
        inputValue={inputText}
        onInputChange={handleInputChange}
        formatOptionLabel={formatOptionLabel}
      />
    </ExampleTemplate>
  )
}

export default ExampleCustomDataInOptions

interface ICountryOption {
  label: string
  value: string
  population: number
}

const countriesLocal: ICountryOption[] = [
  { label: 'China', value: 'china', population: 1402000 },
  { label: 'India', value: 'india', population: 1380000 },
  { label: 'USA', value: 'usa', population: 330000 },
]

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
  //
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
