import { FC, PropsWithChildren, useState } from 'react'
import styles from './ExampleTemplate.module.css'

type Props = {
  name: string
  isVisible?: boolean
}
const ExampleTemplate: FC<PropsWithChildren<Props>> = ({
  children,
  name,
  isVisible = false,
}) => {
  const { componentStyles, labelStyles } = styles
  const [isComponentVisible, setIsComponentVisible] =
    useState<boolean>(isVisible)

  return (
    <div className={componentStyles}>
      <label
        className={labelStyles}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {name} &raquo;
      </label>
      {isComponentVisible && <div>{children}</div>}
    </div>
  )
}

export default ExampleTemplate
