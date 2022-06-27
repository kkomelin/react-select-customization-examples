import { FC, useState } from "react";
import Select, { components, InputActionMeta } from "react-select";
import Example from "./Example";

const Examples: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const handleInputChange = (inputText: string, meta: InputActionMeta) => {
    // Prevent outside click from resetting inputText to "".
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(inputText);
    }
  };

  return (
    <>
      <Example name="0. Initial state">
        <Select
          options={demoOptions}
          isClearable={true}
          isSearchable={true}
        />
      </Example>

      <Example name="1. Remove the dropdown indicator separator">
        <Select
          options={demoOptions}
          isClearable={true}
          isSearchable={true}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </Example>

      <Example name="2. Replace the dropdown indicator icon">
        <Select
          options={demoOptions}
          isClearable={true}
          isSearchable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
        />
      </Example>

      <Example name="3. Move the dropdown icon to the left">
        <Select
          options={demoOptions}
          isClearable={true}
          isSearchable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles3}
        />
      </Example>

      <Example name="4. Move the clear icon to the right">
        <Select
          options={demoOptions}
          isClearable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles4}
        />
      </Example>

      <Example name="5. Prevent clearing value on blur and menu close">
        <Select
          options={demoOptions}
          isClearable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles5}
          inputValue={inputText}
          onInputChange={handleInputChange}
        />
      </Example>

      <Example name="6. Disable displaying options on focus (without search phrase entered)">
        <Select
          options={demoOptions}
          isClearable={true}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles5}
          inputValue={inputText}
          onInputChange={handleInputChange}
        />
      </Example>

      <Example name="7. Display custom data in options">
        <Select
          options={demoOptions}
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
      </Example>


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

const formatOptionLabel = (option: IOption) => {
  return (
    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
      <div style={{ flexGrow: '1', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        {option.label}
      </div>
      <div style={{ textAlign: 'right', color: 'green' }}>
        {option.population} mln
      </div>
    </div>
  )
}

interface IOption {
  label: string;
  value: string;
  population: number;
}

const demoOptions: IOption[] = [
  { label: 'China', value: 'china', population: 1402 },
  { label: 'India', value: 'india', population: 1380 },
  { label: 'USA', value: 'usa', population: 330 },
];
