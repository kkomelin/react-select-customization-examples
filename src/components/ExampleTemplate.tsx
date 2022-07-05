import { FC, PropsWithChildren } from 'react'
import styles from './ExampleTemplate.module.css'

type Props = {
  name: string
}
const ExampleTemplate: FC<PropsWithChildren<Props>> = ({ children, name }) => {
  const { componentStyles, labelStyles } = styles

  return (
    <div className={componentStyles}>
      <label className={labelStyles}>{name}</label>
      {children}
    </div>
  )
}

export default ExampleTemplate
