import React, { useEffect } from 'react';
import Axios from 'axios';

function Favorite(props) {
    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime;

    useEffect(() => {
        let veriables = {
            userFrom,
            movieId
        }
        Axios.post('/api/favorite/favoriteNumber', veriables)
        .then(response => {
            // 성공
            if (response.data.success) {

            // 실패 
            } else {
                alert('failed loading data');

            }
        })
    })

    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite