import React, {FunctionComponent} from 'react';
import Image from "next/image";

import styles from "./styles.module.css";

interface ButtonsProps {
  isMinus?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const Buttons: FunctionComponent<ButtonsProps> = ({isMinus, disabled, onClick}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.root}>
      {isMinus
        ? <Image
          src="/minus.svg"
          alt="minus image"
          className={styles.logo}
          width={24}
          height={2}
          priority
        />
        : <Image
          src="/plus.svg"
          alt="plus image"
          className={styles.logo}
          width={24}
          height={24}
          priority
        />
      }
    </button>
  );
};

export default Buttons;
