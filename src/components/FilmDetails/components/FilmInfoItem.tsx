import React, {FunctionComponent} from 'react';

import styles from "./styles.module.css";

interface FilmInfoItemProps {
  label: string;
  value: string | number;
}

export const FilmInfoItem: FunctionComponent<FilmInfoItemProps> = ({label, value}) => (
  <div className={styles.info}>
    <span className={styles.bold}>{label}</span> {value}
  </div>
);
