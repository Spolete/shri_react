import React, {FunctionComponent} from 'react';
import Image from "next/image";

import {DefaultImage} from "@/components/DefaultImage/DefaultImage";

import styles from "./styles.module.css";

interface ReviewProps {
  name: string;
  text: string;
  rating: number;
  avatar?: string;
}

export const Review: FunctionComponent<ReviewProps> = ({name, text, avatar, rating}) => {
  return (
    <div className={styles.root}>
      {Boolean(avatar)
        ? <Image
          src={avatar!}
          alt="avatar image"
          className={styles.avatar}
          width={100}
          height={100}
          priority
        />
        : <DefaultImage className={styles.avatar}/>
      }
      <div className={styles.right}>
        <div className={styles.title}>
          <div className={styles.userName}>{name}</div>
          <div className={styles.rating}>
            Оценка:
            <span className={styles.ratingNumber}>{rating}</span>
          </div>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
