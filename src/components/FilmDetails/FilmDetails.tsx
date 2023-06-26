import React, {FunctionComponent} from 'react';
import Image from "next/image";

import {Counter} from "@/components/Counter/Counter";
import {DefaultImage} from "@/components/DefaultImage/DefaultImage";

import styles from "./styles.module.css";
import {FilmInfoItem} from "./components/FilmInfoItem";

interface FilmDetailsProps {
  posterUrl: string;
  title: string;
  genre: string;
  releaseYear: number;
  rating: number;
  director: string;
  description: string;
  id: string;
}

export const FilmDetails: FunctionComponent<FilmDetailsProps> = ({
  posterUrl,
  title,
  genre,
  releaseYear,
  rating,
  director,
  description,
  id
}) => {
  return (
    <div className={styles.root}>
      {Boolean(posterUrl)
        ? <Image
          src={posterUrl}
          alt="film image"
          className={styles.img}
          width={400}
          height={500}
          priority
        />
        : <DefaultImage className={styles.img}/>
      }
      <div className={styles.right}>
        <div className={styles.title}>
          <div>{title}</div>
          <div className={styles.rating}>
            <Counter id={id}/>
          </div>
        </div>
        <FilmInfoItem label="Жанр:" value={genre}/>
        <FilmInfoItem label="Год выпуска:" value={releaseYear}/>
        <FilmInfoItem label="Рейтинг:" value={rating}/>
        <FilmInfoItem label="Режиссер:" value={director}/>
        <div className={styles.description}>
          <span className={styles.bold}>Описание</span>
        </div>
        <div className={styles.text}>{description}</div>
      </div>
    </div>
  );
};
