'use client'

import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Input} from "@/components/Input/Input";
import Select, {SelectOption} from "@/components/Select/Select";
import {setSearchTitle, setSelectedGenre} from "@/store/features/filter";
import {ServerSelect} from "@/components/ServerSelect/ServerSelect";

import styles from "./styles.module.css";
import {selectFilterModule} from "@/store/features/filter/selector";
import {RootState} from "@/store/store";

const GENRE_OPTIONS = [
  {value: "Боевик", label: "Боевик"},
  {value: "Комедия", label: "Комедия"},
  {value: "Фэнтези", label: "Фэнтези"},
  {value: "Ужасы", label: "Ужасы"},
];

export const Sidebar: FunctionComponent = () => {
  const selectedGenre = useSelector((state: RootState) => selectFilterModule(state).selectedGenre);
  const searchTitle = useSelector((state: RootState) => selectFilterModule(state).searchTitle);

  const dispatch = useDispatch();
  const handleSetSelectedGenre = (genre: SelectOption | null) => dispatch(setSelectedGenre(genre));

  return (
    <div className={styles.root}>
      <div className={styles.title}>Фильтр поиска</div>
      <div className={styles.nameFilter}>Название</div>
      <Input placeholder="Введите название" value={searchTitle} onChange={(e) => dispatch(setSearchTitle(e.target.value))}/>
      <div className={styles.nameFilter}>Жанр</div>
      <Select placeholder="Выберите жанр" options={GENRE_OPTIONS} selectedOption={selectedGenre} onOptionSelected={handleSetSelectedGenre}/>
      <div className={styles.nameFilter}>Кинотеатр</div>
      <ServerSelect/>
    </div>
  );
};
