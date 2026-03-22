'use client'
import Card from '@/components/Card'
import { useReducer } from 'react'
import Link from 'next/link'

export default function CardPanel(){
    const mockVenueRepo = [{vid:"001", name:"The Bloom Pavilion", image:"/img/bloom.jpg"},
        {vid:"002", name:"Spark Space", image:"/img/sparkspace.jpg"},
        {vid:"003",name:"The Grand Table" , image:"/img/grandtable.jpg"}
    ]
    const ratingReducer = (
    ratingMap:Map<string,number>,
    action:{type:string,venue:string,value?:number}
)=>{
    const newMap = new Map(ratingMap)

    switch(action.type){

        case "rate":
            if(action.value!==undefined){
                newMap.set(action.venue,action.value)
            }
            return newMap

        case "remove":
            newMap.delete(action.venue)
            return newMap

        default:
            return ratingMap
    }
}

const [ratingMap,dispatch] = useReducer(ratingReducer,new Map<string,number>())

    return (
        <div>
            <div style={{  margin:"20px",
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"center",
                gap:"30px",
                padding:"10px"
            }}>
                {
                    mockVenueRepo.map((venueItem)=>(
                        <Link href={`/venue/${venueItem.vid}`} className="w-1/5" key={venueItem.vid}>
                        <Card venueName={venueItem.name} imgSrc={venueItem.image} onRating={(name,value)=>dispatch({type:'rate', venue:name, value:value||0})}/></Link>
                    )
                )
                }
            </div>
            <div className="w-full text-xl font-medium text-black">Venue List with Ratings : {ratingMap.size}</div>
            { Array.from(ratingMap.entries()).map(([venue,rating])=><div
                key={venue}
                data-testid={venue}
                onClick={()=>dispatch({type:"remove",venue:venue})}
                style={{cursor:"pointer"}}
                >

                {venue} : {rating}

                </div>)}
        </div>
    )
}