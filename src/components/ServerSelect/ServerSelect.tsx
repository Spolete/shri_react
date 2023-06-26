'use client'

import React, {FunctionComponent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Select, {SelectOption} from "@/components/Select/Select";
import {useGetCinemasQuery} from "@/store/services/cinemaApi";
import {setSelectedCinema} from "@/store/features/filter";
import {selectFilterModule} from "@/store/features/filter/selector";
import {RootState} from "@/store/store";

export const ServerSelect: FunctionComponent = () => {
  const {data: cinemas, isLoading, error} = useGetCinemasQuery();
  const [cinemaOptions, setCinemaOptions] = useState<{value: string; label: string}[]>([]);

  const selectedCinema = useSelector((state: RootState) => selectFilterModule(state).selectedCinema);

  const dispatch = useDispatch();
  const handleSetSelectedCinema = (cinema: SelectOption | null) => dispatch(setSelectedCinema(cinema));

  useEffect(() => {
    if (cinemas) {
      setCinemaOptions(cinemas.map(cinema => ({value: cinema.id, label: cinema.name})));
    }
  }, [cinemas]);

  if (isLoading) {
    return <Select placeholder="Выберите кинотеатр" options={[]} selectedOption={selectedCinema} onOptionSelected={handleSetSelectedCinema}/>

  }

  if (!cinemas || error) {
    return <></>
  }

  return (
    <Select placeholder="Выберите кинотеатр" options={cinemaOptions} selectedOption={selectedCinema} onOptionSelected={handleSetSelectedCinema}/>
  );
};
