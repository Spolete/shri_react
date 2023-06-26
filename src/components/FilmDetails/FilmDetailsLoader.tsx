'use client'

import React from 'react';
import classNames from "classnames";

import Loader from "@/components/Loader/Loader";

import styles from "./styles.module.css";

export const FilmDetailsLoader = () => {
  const classes = classNames(styles.root, styles.loader)
  return (
    <Loader className={classes}/>
  )
}

