"use client";
import MovieCard from "@/components/MovieCard";
import useMovie from "../../hooks/movie";

export default function Movie() {
  const { data: movies, isLoading } = useMovie();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p className="text-3xl lg:text-4xl mx-auto max-w-xl text-center my-12">
        <strong>Movies</strong>
      </p>
      <div className="mx-[4vw] gap-[1vw] grid grid-cols-1 lg:grid-cols-4">
        {movies.map((movie_item: any) => {
          return <MovieCard key={movie_item.id} movie={movie_item}></MovieCard>;
        })}
      </div>
    </div>
  );
}
