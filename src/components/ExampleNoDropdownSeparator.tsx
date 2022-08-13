import Select from 'react-select'
import ExampleTemplate from './ExampleTemplate'

const ExampleNoDropdownSeparator = () => {
  return (
    <ExampleTemplate
      name="2. Remove the dropdown indicator separator"
      filename="ExampleNoDropdownSeparator.tsx"
    >
      <Select
        options={countriesLocal}
        isClearable={true}
        isSearchable={true}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </ExampleTemplate>
  )
}

export default ExampleNoDropdownSeparator

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
