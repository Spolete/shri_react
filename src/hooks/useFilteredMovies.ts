import { useGetMoviesQuery } from '@/store/services/movieApi';
import { SelectOption } from "@/components/Select/Select";

export const useFilteredMovies = (selectedCinema: SelectOption | null, selectedGenre: SelectOption | null, searchTitle: string) => {
  const { data, isLoading, error } = useGetMoviesQuery(selectedCinema?.value);

  let filteredMovies = data || [];

  if (selectedGenre) {
    filteredMovies = filteredMovies.filter(movie => movie.genre === selectedGenre.value);
  }

  if (searchTitle) {
    filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchTitle.toLowerCase()));
  }

  return { filteredMovies, isLoading, error };
};
