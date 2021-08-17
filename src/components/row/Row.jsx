import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { v4 as uuid } from "uuid";
import ScrollContainer from 'react-indiana-drag-scroll'
import "./row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row" key={uuid}>
      <h2>{title}</h2>
          <ScrollContainer className="row__posters" key={uuid()} horizontal={true} nativeMobileScroll={true}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={uuid()}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${movie.poster_path}`}
                alt={movie.name}
              />
            )
        )}
      </ScrollContainer>
    </div>
  );
}

export default Row;
