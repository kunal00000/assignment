import { useQuery } from "react-query";

export default function useMovie() {
  return useQuery("movies", fetchMovie);
}

async function fetchMovie() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`
      }
    });
    const data = await response.json();
    const movies = data.results;
    return movies;
  } catch (e) {
    console.log(e);
  }
}
