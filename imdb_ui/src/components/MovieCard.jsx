import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, year, rating }) => {
    return (
        <div className="col-sm-12 col-md-3">
            <div className="card mb-3 text-bg-light">
                <div className="card-header fs-5">
                    {title}
                </div>
                <div className="card-body">
                    <p className="card-text fw-semibold">
                        Año de lanzamiento:
                        <span className='mx-1 fw-normal'>
                            {year}
                        </span>
                    </p>
                    <p className="card-text fw-semibold">
                        Calificación de IMDb:
                        <span className='mx-1 fw-normal'>
                            {rating}
                        </span>
                    </p>
                    <div className="text-center">
                        <Link
                            to={`/movie/${id}`}
                            className='btn btn-primary text-decoration-none'
                        >
                            Más detalles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;