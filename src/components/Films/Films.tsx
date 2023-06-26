import React, {FunctionComponent} from 'react';
import { useSelector } from "react-redux";

import { TicketCard } from "@/components/TicketCard/TicketCard";
import { useFilteredMovies } from '@/hooks/useFilteredMovies';
import { TicketCardLoader } from "@/components/TicketCard/TicketCardLoader";
import styles from "@/app/cart/styles.module.css";
import {selectFilterModule} from "@/store/features/filter/selector";
import {RootState} from "@/store/store";

export const Films: FunctionComponent = () => {
  const selectedGenre = useSelector((state: RootState) => selectFilterModule(state).selectedGenre);
  const selectedCinema = useSelector((state: RootState) => selectFilterModule(state).selectedCinema);
  const searchTitle = useSelector((state: RootState) => selectFilterModule(state).searchTitle);

  const { filteredMovies, isLoading, error } = useFilteredMovies(selectedCinema, selectedGenre, searchTitle);

  if (isLoading) {
    return (
      <>
        <TicketCardLoader />
        <TicketCardLoader />
        <TicketCardLoader />
      </>
    )
  }

  if (error) {
    return <span>Ошибка</span>
  }

  if (!filteredMovies.length) {
    return (
      <div className={styles.center}>
        <div className={styles.title}>Фильмы не найдены</div>
      </div>
    )
  }

  return (
    <>
      {filteredMovies.map(({genre, title, posterUrl, id}) =>
        <TicketCard key={id} genre={genre} name={title} img={posterUrl} id={id}/>
      )}
    </>
  );
};
