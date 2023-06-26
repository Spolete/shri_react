import React, {FunctionComponent} from 'react';
import classNames from "classnames";

import styles from "./styles.module.css";

interface ButtonProps {
  isDenied?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({isDenied, onClick, className}) => {
  const rootStyles = classNames(styles.root, className, {
    [styles.isDenied]: isDenied,
  });

  return (
    <button onClick={onClick} className={rootStyles}>
      {isDenied ? "Нет" : "Да"}
    </button>
  );
};
