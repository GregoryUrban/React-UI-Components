import React from 'react';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import "./Card.css";

const CardContainer = () => (
    <a href='https://reactjs.org/' target = '_blank'>
    
    <div className='card-container'>
        <CardBanner />
        <CardContent />
    </div>
    </a>
);

export default CardContainer;