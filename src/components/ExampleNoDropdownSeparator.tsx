import Select from "react-select"
import ExampleTemplate from "./ExampleTemplate"

const ExampleNoDropdownSeparator = () => {
  return (
    <ExampleTemplate name="Remove the dropdown indicator separator">
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
  label: string;
  value: string;
  population: number;
}

const countriesLocal: ICountryOption[] = [
  { label: 'China', value: 'china', population: 1402000 },
  { label: 'India', value: 'india', population: 1380000 },
  { label: 'USA', value: 'usa', population: 330000 },
];
