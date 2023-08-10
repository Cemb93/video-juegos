import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_detail } from "../../redux/actions";

export default function Details(props) {
  // console.log('MIS PROPS DE DETALLE:', props)
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log('ID DE DETALLE:', id);
  
  useEffect(() => {
    dispatch(get_detail(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);
  console.log("MI DETALLE:", detail);

  return (
    <div>
      {detail ? (
        <div>
          <p>
            <strong>Nombre: </strong>
            {detail.name}
          </p>
          <img
            src={detail.image}
            alt="img not found"
            width="500px"
            height="300px"
          />
          <p>
            <strong>Fecha de creación: </strong>
            {detail.released}
          </p>
          <p>
            <strong>Generos: </strong>
            {
              detail.genres.length >= 1 && detail.genres.map(genre => typeof genre === 'object'? genre.name + ', ' : genre + ', ')
            }
          </p>
          <p>
            <strong>Calificación: </strong>
            {detail.rating}
          </p>
          <p>
            <strong>Descripción: </strong>
            {detail.description || detail.description_raw}
          </p>
          <p>
            <strong>Plataformas: </strong>
            {detail.platforms.map(platform => platform + ', ')}
          </p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <div>
        <Link to={"/home"}>
          <button>Regresar</button>
        </Link>
      </div>
    </div>
  );
}
