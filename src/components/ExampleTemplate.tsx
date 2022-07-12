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
        {name} <Chevron down={!isComponentVisible} />
      </label>
      {isComponentVisible && <div>{children}</div>}
    </div>
  )
}

export default ExampleTemplate

type ChevronProps = {
  down?: boolean
}
const Chevron: FC<ChevronProps> = ({ down = true }) => (
  <span
    style={{
      transform: down ? 'rotate(180deg)' : 'none',
      padding: '0 4px',
    }}
  >
    &#x25B2;
  </span>
)
