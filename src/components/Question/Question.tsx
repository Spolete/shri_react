'use client'

import Image from "next/image";
import classNames from "classnames";
import React, {FunctionComponent, useState} from 'react';

import styles from "./styles.module.css";

interface QuestionProps {
  title?: string;
  subtitle?: string;
}

export const Question: FunctionComponent<QuestionProps> = ({title, subtitle}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const svgStyles = classNames(styles.svg, {
    [styles.svgOpen]: isOpen,
  });

  const subtitleStyles = classNames(styles.subtitle, {
    [styles.subtitleOpen]: isOpen,
  });

  return (
    <div className={styles.root} onClick={handleToggle}>
      <div className={styles.title}>
        <div>{title}</div>
        <Image
          src="/open.svg"
          alt="open image"
          className={svgStyles}
          width={30}
          height={30}
          priority
        />
      </div>
      <div className={subtitleStyles}>{subtitle}</div>
    </div>
  );
};
