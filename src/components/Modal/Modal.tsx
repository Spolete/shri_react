'use client'

import React, {Dispatch, FunctionComponent, SetStateAction} from 'react';
import Image from "next/image";
import {createPortal} from 'react-dom';
import {useDispatch} from "react-redux";

import {cartActions} from "@/store/features/cart";
import {Button} from "@/components/Button/Button";
import {useBodyScrollLock} from "@/hooks/useBodyScrollLock";

import styles from "./styles.module.css";

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  id: string;
}

export const Modal: FunctionComponent<ModalProps> = ({showModal, setShowModal, id}) => {
  useBodyScrollLock(showModal);

  const dispatch = useDispatch()

  const onYesHandle = () => {
    dispatch(cartActions.remove(id));
    setShowModal(false);
  }

  return (
    <>
      {showModal && createPortal(
        <div onClick={() => setShowModal(false)} className={styles.root}>
          <div onClick={e => e.stopPropagation()} className={styles.modal}>
            <div className={styles.row}>
              <div className={styles.title}>Удаление билета</div>
              <Image
                src="/close.svg"
                alt="close image"
                width={14}
                height={14}
                className={styles.close}
                onClick={() => setShowModal(false)}
                priority
              />
            </div>
            <div className={styles.question}>Вы уверены, что хотите удалить билет?</div>
            <div className={styles.buttons}>
              <Button onClick={onYesHandle}/>
              <Button onClick={() => setShowModal(false)} className={styles.rightButton} isDenied={true}/>
            </div>
          </div>
        </div>
        ,
        document.body
      )}
    </>
  );
}
