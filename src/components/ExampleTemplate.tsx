import { FC, PropsWithChildren } from 'react'
import { examplePath } from '../helpers'
import styles from './ExampleTemplate.module.css'

type Props = {
  name: string
  filename: string
}
const ExampleTemplate: FC<PropsWithChildren<Props>> = ({
  children,
  name,
  filename,
}) => {
  const { componentStyles, labelStyles } = styles

  return (
    <div className={componentStyles}>
      <label className={`${labelStyles} ext-link`}>
        {name} <SourceLink filename={filename} />
      </label>
      <div>{children}</div>
    </div>
  )
}

export default ExampleTemplate

type SourceLinkProps = {
  filename: string
}
const SourceLink: FC<SourceLinkProps> = ({ filename }) => {
  return (
    <>
      (
      <a href={examplePath(filename)} target="_blank" rel="noreferrer noopener">
        source
      </a>
      )
    </>
  )
}
