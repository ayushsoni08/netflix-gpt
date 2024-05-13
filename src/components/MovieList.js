// import React from 'react'
// import MovieCard from './MovieCard';

// const MovieList = ({title, movies}) => {
//     // console.log(movies);
//   return (
//     <div>
//         <div>
//             <h1>{title}</h1>
//             <div>
//                 {/* <MovieCard posterPath={movies[0].poster_path} /> */}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default MovieList;

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList; 