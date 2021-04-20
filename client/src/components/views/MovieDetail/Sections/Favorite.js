import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button } from 'antd';

function Favorite(props) {
    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime;

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);

    let veriables = {
        userFrom: userFrom,
        movieId: movieId,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime
    }

    useEffect(() => {
        Axios.post('/api/favorite/favoriteNumber', veriables)
        .then(response => {
            // 성공
            if (response.data.success) {
                // console.log(response.data);
                setFavoriteNumber(response.data.favoriteNumber);
            // 실패 
            } else {
                alert('failed loading data');

            }
        })

        Axios.post('/api/favorite/favorited', veriables)
        .then(response => {
            // 성공
            if (response.data.success) {
                // console.log(response.data);
                setFavorited(response.data.favorited);
            // 실패 
            } else {
                alert('failed loading data');

            }
        })
    })

    const onClickFavorite = () => {
        if (Favorited) {
            Axios.post('/api/favorite/removeFromFavorite', veriables)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(FavoriteNumber - 1);
                    setFavorited(!Favorited);
                } else {
                    alert('failed removing data');
                }
            })
        } else if (!Favorited) {
            Axios.post('/api/favorite/addToFavorite', veriables)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(FavoriteNumber + 1);
                    setFavorited(!Favorited);
                } else {
                    alert('failed adding data');
                }
            })
        }
    }

    return (
        <div>
            <Button onClick={onClickFavorite}>
                {Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}
            </Button>
        </div>
    )
}

export default Favorite