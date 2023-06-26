'use client'

import React from "react";
import {useSelector} from "react-redux";

import {TicketCard} from "@/components/TicketCard/TicketCard";
import {useGetMoviesQuery} from "@/store/services/movieApi";
import {selectCartModule} from "@/store/features/cart/selector";
import {TicketsAmount} from "@/components/TicketsAmount/TicketsAmount";

import styles from "./styles.module.css";

function isDefined<T>(item: T | undefined): item is T {
  return item !== undefined;
}

export default function Cart() {
  const cartItems = useSelector(selectCartModule);
  const {data} = useGetMoviesQuery(undefined);

  if (!data) {
    return (
      <div className={styles.center}>
        <div className={styles.title}>Корзина пуста</div>
      </div>
    );
  }
  
  const moviesInCart = Object.keys(cartItems).map(id => {
    const movie = data.find(movie => movie.id === id);
    return movie ? {...movie, count: cartItems[id]} : undefined;
  }).filter(isDefined);


  if (!moviesInCart.length) {
    return (
      <div className={styles.center}>
        <div className={styles.title}>Корзина пуста</div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {moviesInCart.map(({genre, title, posterUrl, id, count}) =>
          <TicketCard key={id} genre={genre} name={title} img={posterUrl} id={id} count={count} close={true}/>
        )}
      </div>
      <TicketsAmount></TicketsAmount>
    </div>
  )
}


