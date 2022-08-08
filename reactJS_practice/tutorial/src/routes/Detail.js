import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(Object());
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={style.moviePrint}>
      {loading ? <h1>Loading...</h1> : JSON.stringify(detail, null, "\t")}
    </div>
  );
}

export default Detail;
