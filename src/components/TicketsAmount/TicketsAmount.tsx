'use client'

import React, {FunctionComponent} from 'react';
import {useSelector} from "react-redux";

import {selectTotalTicketsAmount} from "@/store/features/cart/selector";

import styles from "./styles.module.css";
import {RootState} from "@/store/store";

interface TicketsAmountProps {
  count?: number;
}

export const TicketsAmount: FunctionComponent<TicketsAmountProps> = ({count}) => {
  const totalTicketsAmount = useSelector((state: RootState) => selectTotalTicketsAmount(state));

  return (
    <div className={styles.root}>
      <div>Итого билетов:</div>
      <div>{totalTicketsAmount}</div>
    </div>
  );
};
