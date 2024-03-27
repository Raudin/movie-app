"use client"
import { useState, useEffect } from "react";
import Movie from "../components/Movie";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`
    );
    const res = await data.json();
    setMovies((prevMovies) => [...prevMovies, ...res.results]);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
      <button 
      className = ""
      onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
        Load More
      </button>
    </main>
  );
}