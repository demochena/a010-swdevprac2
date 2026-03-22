"use client"
import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material';

export default function Card({venueName, imgSrc, onRating}:{venueName:string, imgSrc:string, onRating?:(venue:string,value:number|null)=>void}){
    
    return (
         <InteractiveCard contentName={venueName}>
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className="object-cover"/>
            </div>
            <div className={styles.cardtext}>
                <h3>{venueName}</h3>
                {/* <h5>A vibrant venue perfect for concerts, parties, and unforgettable night events.</h5> */}
            {onRating && (
                    <div data-testid={`${venueName} Rating`} onClick={(e)=>e.stopPropagation()}>
                        <Rating name={venueName} precision={1} onChange={(e,value)=>{ e.stopPropagation(); onRating(venueName,value)}} />
                    </div>
                )}
            </div>
            

        </div>
        </InteractiveCard>
    )
}