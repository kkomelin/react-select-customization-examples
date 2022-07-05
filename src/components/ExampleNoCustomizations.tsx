import Select from 'react-select'
import ExampleTemplate from './ExampleTemplate'

const ExampleNoCustomizations = () => {
  return (
    <ExampleTemplate
      name="Dropdown without customizations"
      isVisible={true}
    >
      <Select options={countriesLocal} isClearable={true} isSearchable={true} />
    </ExampleTemplate>
  )
}

export default ExampleNoCustomizations

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
