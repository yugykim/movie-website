import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, id, title, summary, genres, year, rating }) {
  return (
    <div>
      <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img}/>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.movie__year}>{year}</p>
        <p>{summary}</p>
        <p>{rating}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>  //we have to give key 
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.protoTypes = {
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
}
export default Movie;