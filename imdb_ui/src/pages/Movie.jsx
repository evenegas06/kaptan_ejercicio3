import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const initialState = {
    title: '',
    year: 2023,
    duration: 0,
    genres: [],
    rating: 0,
    description: '',
    starList: [],
    poster: '',
};

const Movie = () => {
    /*--- Hooks --- */
    const { movieId } = useParams();
    const [movie, setMovie] = useState(initialState);

    /*--- Functions --- */
    const getMovie = async (id) => {
        const url = `http://127.0.0.1:8000/api/movie/${id}`;
        const response = await fetch(url);
        const json_response = await response.json();
        setMovie(json_response);
    };

    useEffect(() => {
        getMovie(movieId);
    }, [movieId]);

    return (
        <main className='container'>
            <h1 className='text-center my-3'>{movie.title}</h1>
            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-4">
                    <img
                        className='img-fluid'
                        src={movie.poster}
                        alt={movie.title}
                    />
                </div>
            </div>
            <div className="row justify-content-center my-3">
                <div className="col-md-6">
                    <p>{movie.description}</p>
                    <p>Actores estelares:</p>
                    <ul>
                        {movie.starList.map((star) => {
                            return (
                                <li key={star.id}>
                                    {star.name}
                                </li>
                            );
                        })}
                    </ul>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <span className='mx-1 fw-semibold'>Año de lanzamiento: </span>{movie.year}
                                </td>
                                <td>
                                    <span className='mx-1 fw-semibold'>Duración: </span>{movie.duration}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='mx-1 fw-semibold'>Géneros: </span>{movie.genres}
                                </td>
                                <td>
                                    <span className='mx-1 fw-semibold'>Calificación de IMDb: </span>{movie.rating}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default Movie;