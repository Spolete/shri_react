import React, {FunctionComponent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Modal} from "@/components/Modal/Modal";
import {cartActions} from "@/store/features/cart";
import {selectTicketAmount} from "@/store/features/cart/selector";

import Buttons from "../Buttons/Buttons";

import styles from "./styles.module.css";
import {RootState} from "@/store/store";

interface CounterProps {
  id: string;
}

export const Counter: FunctionComponent<CounterProps> = ({id}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch()
  const ticketsAmount = useSelector((state: RootState) => selectTicketAmount(state, id));

  const decrement = () => {
    if (ticketsAmount === 1) {
      setShowModal(true)
    } else {
      dispatch(cartActions.decrement(id));
    }
  }

  return (
    <div className={styles.root}>
      <Buttons disabled={ticketsAmount === 0} onClick={decrement} isMinus={true}/>
      <span className={styles.count}>{ticketsAmount}</span>
      <Buttons disabled={ticketsAmount === 30} onClick={() => dispatch(cartActions.increment(id))} />
      <Modal showModal={showModal} setShowModal={setShowModal} id={id} />
    </div>
  );
};
