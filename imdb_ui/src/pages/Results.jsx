import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

import { useParams } from 'react-router-dom';

const Results = () => {

    /*--- Hooks ---*/
    const { searchValue } = useParams();
    const [movies, setMovies] = useState([]);

    /*--- Functions --- */
    const getMovies = async (expression) => {
        const url = `http://127.0.0.1:8000/api/search-movies/${expression}`;
        const response = await fetch(url);
        const json_response = await response.json();
        console.log(json_response);
        setMovies(json_response);
    };

    useEffect(() => {
        getMovies(searchValue);
    }, [searchValue]);

    return (
        <main className='container'>
            <h1 className='text-center'>Estas son las coincidencias con tu búsqueda: </h1>
            <div className="row my-4">
                {!movies.length ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                    : movies.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                rating={movie.rating}
                            />
                        );
                    })
                }
            </div>
        </main>
    );
};

export default Results;