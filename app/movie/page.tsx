"use client";

import useMovie from "../../hooks/movie";

export default function Movie() {
  const { data: movies, isLoading } = useMovie();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
}
