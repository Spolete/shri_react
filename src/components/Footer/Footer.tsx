'use client'

import React, {FunctionComponent} from 'react';
import Link from "next/link";

import styles from "./styles.module.css";

export const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.root}>
      <Link href={"/faq"} className={styles.link}>Вопросы-ответы</Link>
      <Link href={"/about"} className={styles.link}>О нас</Link>
    </footer>
  );
};
