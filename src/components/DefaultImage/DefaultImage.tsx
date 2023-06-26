import React, {FunctionComponent} from 'react';
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.css";

interface DefaultImageProps {
  className: string;
}
export const DefaultImage: FunctionComponent<DefaultImageProps> = ({className}) => {
  const rootStyles = classNames(className, styles.root);

  return (
    <div className={rootStyles}>
      <Image
        src="/defaultImage.svg"
        alt="default image"
        width={26}
        height={22}
        priority
      />
    </div>
  );
};

