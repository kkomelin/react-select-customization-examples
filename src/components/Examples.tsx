import debounce from 'lodash.debounce';
import { FC, useRef, useState } from "react";
import { useQuery } from 'react-query';
import Select, { components, InputActionMeta } from "react-select";
import ExampleCustomDropdownIcon from './ExampleCustomDropdownIcon';
import ExampleNoCustomizations from './ExampleNoCustomizations';
import ExampleNoDropdownSeparator from './ExampleNoDropdownSeparator';
import ExampleTemplate from "./ExampleTemplate";

const API_URL = 'https://countries-for-blog.vercel.app/api/countries';

const apiSearch = async (searchText: string) => {
  try {
    const response = await fetch(
      `${API_URL}${searchText ? '/' + searchText : ''}`,
    );
    return await response.json();
  }
  catch (error) {
    console.error(error)
    return [];
  }
}

const Examples: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [countries, setCountries] = useState<ICountryOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { isLoading: isLoadingData, error, data } = useQuery(
    searchText && ['countryData', searchText],
    async () => await apiSearch(searchText),
    {
      enabled: !!searchText
    }
  );

  const handleSearchDebounced8 = useRef(
    debounce(searchText => handleSearch(searchText), 300)
  ).current;

  const handleSearchDebounced9 = useRef(
    debounce(searchText => setSearchText(searchText), 300)
  ).current;

  const handleInputChange = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(inputText);
    }
  };

  const handleInputChange7 = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(inputText);
      handleSearch(inputText)
    }
  };

  const handleInputChange8 = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(inputText);
      handleSearchDebounced8(inputText)
    }
  };

  const handleInputChange9 = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(inputText);
      handleSearchDebounced9(inputText)
    }
  };

  const handleSearch = async (searchQuery: string) => {
    if (searchQuery.trim().length === 0) {
      setCountries([]);
      return;
    }

    try {
      setIsLoading(true);
      const countries = await apiSearch(searchQuery);
      setCountries(countries)
    }
    catch (e) {
      console.error(e);
      setCountries([]);
    }
    finally {
      setIsLoading(false);
    }
  }

  const noOptionsMessage7 = (obj: { inputValue: string }) => {
    if (obj.inputValue.trim().length === 0) {
      return null
    }
    return "No matching results"
  }

  return (
    <>
      <ExampleNoCustomizations />

      <ExampleNoDropdownSeparator />

      <ExampleCustomDropdownIcon />

      <ExampleTemplate name="Move the dropdown icon to the left">
        <Select
          options={countriesLocal}
          isClearable={true}
          isSearchable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles3}
        />
      </ExampleTemplate>

      <ExampleTemplate name="Move the clear icon to the right">
        <Select
          options={countriesLocal}
          isClearable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles4}
        />
      </ExampleTemplate>

      <ExampleTemplate name="Prevent clearing value on blur">
        <Select
          options={countriesLocal}
          isClearable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles4}
          inputValue={inputText}
          onInputChange={handleInputChange}
        />
      </ExampleTemplate>

      <ExampleTemplate name="Display custom data in options">
        <Select
          options={countriesLocal}
          isClearable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles5}
          formatOptionLabel={formatOptionLabel}
          inputValue={inputText}
          onInputChange={handleInputChange}
        />
      </ExampleTemplate>

      <ExampleTemplate name="Search by remote data">
        <Select
          options={countries}
          isClearable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles5}
          formatOptionLabel={formatOptionLabel}
          inputValue={inputText}
          //
          onInputChange={handleInputChange7}
          isLoading={isLoading}
          filterOption={null}
          noOptionsMessage={noOptionsMessage7}
        />
      </ExampleTemplate>

      <ExampleTemplate name="Search by remote data with debounching">
        <Select
          options={countries}
          isClearable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles5}
          formatOptionLabel={formatOptionLabel}
          inputValue={inputText}
          onInputChange={handleInputChange8}
          isLoading={isLoading}
          filterOption={null}
          noOptionsMessage={noOptionsMessage7}
        />
      </ExampleTemplate>

      <ExampleTemplate name="Search by remote data with debounching and caching">
        <>
          {error && 'An error has occurred'}

          <Select
            options={data}
            isClearable={true}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator
            }}
            styles={customStyles5}
            formatOptionLabel={formatOptionLabel}
            inputValue={inputText}
            onInputChange={handleInputChange9}
            isLoading={isLoadingData}
            filterOption={null}
            noOptionsMessage={noOptionsMessage7}
          />
        </>
      </ExampleTemplate>
    </>
  )
}

export default Examples;

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SearchIcon />
      </components.DropdownIndicator>
    )
  );
};

const SearchIcon = () =>
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="38" cy="40" r="20.5" stroke="currentColor" strokeWidth="7" />
    <path d="M76.0872 84.4699C78.056 86.4061 81.2217 86.3797 83.158 84.4109C85.0943 82.442 85.0679 79.2763 83.099 77.34L76.0872 84.4699ZM50.4199 59.2273L76.0872 84.4699L83.099 77.34L57.4317 52.0974L50.4199 59.2273Z" fill="currentColor" />
  </svg>

const customStyles3 = {
  control: (base: any) => ({
    ...base,
    flexDirection: "row-reverse",
  }),
}

const customStyles4 = {
  ...customStyles3,
  clearIndicator: (base: any) => ({
    ...base,
    position: 'absolute',
    right: 0
  }),
}

const customStyles5 = {
  ...customStyles4,
  valueContainer: (base: any) => ({
    ...base,
    paddingRight: '2.3rem',
  }),
}

const formatOptionLabel = (option: ICountryOption) => {
  return (
    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
      <div style={{ flexGrow: '1', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        {option.label}
      </div>
      <div style={{ textAlign: 'right', color: 'green' }}>
        {option.population / 1000}m
      </div>
    </div>
  )
}

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
