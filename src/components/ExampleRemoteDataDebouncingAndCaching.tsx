import debounce from 'lodash.debounce';
import { useRef, useState } from "react";
import { useQuery } from 'react-query';
import Select, { components, InputActionMeta } from "react-select";
import ExampleTemplate from "./ExampleTemplate";

const API_URL = 'https://countries-api-for-blog.vercel.app/api/countries';

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

const ExampleRemoteDataDebouncingAndCaching = () => {
  const [inputText, setInputText] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const { isLoading: isLoadingData, error, data } = useQuery(
    searchText && ['countryData', searchText],
    async () => await apiSearch(searchText),
    {
      enabled: !!searchText
    }
  );

  const handleSearchDebounced = useRef(
    debounce(searchText => setSearchText(searchText), 300)
  ).current;

  const handleInputChange = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(inputText);
      handleSearchDebounced(inputText)
    }
  };

  const noOptionsMessage = (obj: { inputValue: string }) => {
    if (obj.inputValue.trim().length === 0) {
      return null
    }
    return "No matching results"
  }

  return (
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
          styles={customStyles}
          formatOptionLabel={formatOptionLabel}
          inputValue={inputText}
          onInputChange={handleInputChange}
          isLoading={isLoadingData}
          filterOption={null}
          noOptionsMessage={noOptionsMessage}
        />
      </>
    </ExampleTemplate>
  )
}

export default ExampleRemoteDataDebouncingAndCaching

interface ICountryOption {
  label: string;
  value: string;
  population: number;
}

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

const customStyles = {
  control: (base: any) => ({
    ...base,
    flexDirection: "row-reverse",
  }),
  clearIndicator: (base: any) => ({
    ...base,
    position: 'absolute',
    right: 0
  }),
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
