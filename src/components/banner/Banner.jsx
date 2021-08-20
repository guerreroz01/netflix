import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../Request";
import { defaltMovie } from "./data";
import "./banner.css";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${
          movie
            ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            : defaltMovie.imageURL
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name ||
            movie?.original_name ||
            movie?.title ||
            defaltMovie.movieTitle}
        </h1>
        <h1 className="banner__description">
          {movie ? truncate(movie.overview, 150) : defaltMovie.movieDescription}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div style={{ height: "50px" }}></div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

/*https://gmedia.playstation.com/is/image/SIEPDC/netflix-page-banner-desktop-02-en-10nov20?$native--t$*/
