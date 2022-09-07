import { FC } from 'react'
import ExampleClearIconToRight from './ExampleClearIconToRight'
import ExampleCustomDataInOptions from './ExampleCustomDataInOptions'
import ExampleCustomDropdownIcon from './ExampleCustomDropdownIcon'
import ExampleDisableClearingValueOnBlur from './ExampleDisableClearingValueOnBlur'
import ExampleDropdownIconToLeft from './ExampleDropdownIconToLeft'
import ExampleNoCustomizations from './ExampleNoCustomizations'
import ExampleNoDropdownSeparator from './ExampleNoDropdownSeparator'
import ExampleRemoteData from './ExampleRemoteData'
import ExampleRemoteDataDebouncing from './ExampleRemoteDataDebouncing'
import ExampleRemoteDataDebouncingAndCaching from './ExampleRemoteDataDebouncingAndCaching'

const Examples: FC = () => {
  return (
    <>
      <ExampleNoCustomizations />

      <ExampleNoDropdownSeparator />

      <ExampleCustomDropdownIcon />

      <ExampleDropdownIconToLeft />

      <ExampleClearIconToRight />

      <ExampleDisableClearingValueOnBlur />

      <ExampleCustomDataInOptions />

      <ExampleRemoteData />

      <ExampleRemoteDataDebouncing />

      <div id="final" />
      <ExampleRemoteDataDebouncingAndCaching />
    </>
  )
}

export default Examples
