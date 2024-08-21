import React from "react";
import styles from "../components/Card.module.css";

export default function Card(parts) {
  let bandageText 
  if(parts.openSpots === 0 ) {
    bandageText = 'SOLD OUT'
  } else if(parts.location === 'Online') {
    bandageText = 'ONLINE'
  }
  return (
    <div>
      <div className={styles.Container}>
        <img className={styles.leftImage} src={`../images/${parts.coverImg}`} />
        {bandageText && <p className={styles.photoText}>{bandageText}</p>}
      </div>
      
      <div className={styles.photoStats}> 
          <img className={styles.photoStartImg} src={"../images/star.png"} />
          <span className={styles.numStars}>{parts.stats.rating}</span>
          <span className={styles.numOnline}>({parts.stats.reviewCount}) •&nbsp; </span> 
          <span className={styles.location}>{parts.location}</span>
      </div>     
          <p>{parts.title}</p>
          <p><span className={styles.price}> ${parts.price} </span> / person</p>
        
     
    </div>
  );
}
/*
coverImg
description
id
location

openSpots
price
stats
{rating: 5, reviewCount: 6}
title
: 
"Life Les */