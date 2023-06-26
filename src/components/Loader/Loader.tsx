import React, {FunctionComponent} from 'react';
import classNames from "classnames";

import styles from './styles.module.css';

interface LoaderProps {
  className?: string;
}

const Loader: FunctionComponent<LoaderProps> = ({className}) => {
  const rootStyles = classNames(styles.loaderContainer, className)
  return (
    <div className={rootStyles}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
