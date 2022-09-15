import React, { useState, useEffect } from 'react';
import './BrandCarousel.scss'


import brand1 from './../../assets/brand-1.svg';
import brand2 from './../../assets/brand-2.svg';
import brand3 from './../../assets/brand-3.svg';
import brand4 from './../../assets/brand-1.svg';
import brand5 from './../../assets/brand-2.svg';
import brand6 from './../../assets/brand-3.svg';


function BrandCarousel(props) {
    let ImageItems = [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6
    ]

    return (
        <section className={props.styleClass}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <div id={props.Id}>
                {ImageItems.map( (imageItem, index) =>( <img key={(index)} alt='casa' src={imageItem} /> )   )}
            </div>
        </section>
    );
};



export default BrandCarousel;
