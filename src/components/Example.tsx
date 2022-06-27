import { FC, PropsWithChildren } from "react";
import styles from './Example.module.css';

type Props = {
  name: string;
}
const Example: FC<PropsWithChildren<Props>> = ({ children, name }) => {
  const { componentStyles, labelStyles } = styles;

  return (
    <div className={componentStyles}>
      <label className={labelStyles}>{name}</label>
      {children}
    </div>
  )
}

export default Example;
