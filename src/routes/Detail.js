import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie)
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          <Movie
            coverImg={movie.large_cover_image}
            id={movie.id}
            title={movie.title}
            summary={movie.description_full}
            genres={movie.genres}
            year={movie.year}
            rating={movie.rating}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;