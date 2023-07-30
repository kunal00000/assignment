export default function MovieCard({ movie }: { movie: any }) {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-white  hover:shadow-2xl ">
      <div className="h-1/2 p-4 ">
        <h3 className="mb-2 text-base font-semibold text-blue-800">
          {movie.original_title}
        </h3>
        <span>Ratings: </span>
        <span className="text-sm font-bold text-orange-500">
          {movie.vote_average}
        </span>
        <div className="flex flex-row justify-between text-xs mt-2">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
