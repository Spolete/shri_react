'use client'

import React from 'react';

import styles from "./styles.module.css";

interface ButtonsProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
}

export const Input = ({placeholder, value, onChange}: ButtonsProps) => {
  return (
    <input className={styles.root} placeholder={placeholder} value={value} onChange={onChange} />
  );
};
