import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
    if (props.landingPage) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{position:'relative'}}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style={{width:'100%', height:'320px'}} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
        )
    } else if (props.actor) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{position:'relative'}}>
                    {props.image != null ?
                        <img style={{width:'100%', height:'320px'}} src={props.image} alt={props.characterName} /> :
                        <div style={{width:'100%', height:'320px', backgroundColor:'lightgray', color:'gray', textAlign:'center'}}>{props.characterName}</div>
                    }
                </div>
            </Col>
        )
    }

}

export default GridCards