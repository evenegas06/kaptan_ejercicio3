import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    /*--- Hooks --- */
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    /*--- Functions --- */
    const search = (event) => {
        setSearchValue(event.target.value);
    };

    const sendData = (event) => {
        event.preventDefault();
        navigate(`/search-results/${searchValue}`);
    };

    return (
        <main className='container text-center'>
            <h1>Busca tu película favorita</h1>
            <form onSubmit={sendData}>
                <div className='row justify-content-center'>
                    <div className='col-md-5'>
                        <input
                            type='text'
                            name='search'
                            placeholder='Buscar...'
                            className='form-control'
                            onChange={search}
                        />
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-3 my-3'>
                            <button
                                type='submit'
                                className='btn btn-primary'>Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default Home;