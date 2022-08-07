import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <img src={mediumCoverImage} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
