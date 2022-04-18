import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({ coverImg, id, title, summary, genres, year, rating }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title}/>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{year}</p>
        <p>{summary}</p>
        <p>{rating}</p>
        <ul>
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