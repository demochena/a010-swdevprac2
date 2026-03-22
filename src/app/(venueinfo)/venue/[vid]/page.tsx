import Image from "next/image"
import getVenue from "@/libs/getVenue"
export default async function VenueDetailPage({params}:{ params: Promise<{ vid: string }> }){
    const {vid} = await params
    const venueDetail = await getVenue(vid)
    // const mockVenueRepo = new Map()
    // mockVenueRepo.set("001", {name:"The Bloom Pavilion", image:"/img/bloom.jpg"})
    // mockVenueRepo.set("002", {name:"Spark Space", image:"/img/sparkspace.jpg"})
    // mockVenueRepo.set("003", {name:"The Grand Table", image:"/img/grandtable.jpg"})
    return (
        <main className="p-5">
            <h1 className="text-lg text-center font-bold ">{venueDetail.data.name}</h1>
            <div className="flex gap-10 mt-10">
            <Image 
                // src={(mockVenueRepo.get(vid)).image}
                src = {venueDetail.data.picture}
                alt='Product Picture'
                width={0} height={0} sizes="100vw"
                className='rounded-lg w-[30%] bg-black'/>
            <div className='text-md mx-5 text-left'><br></br>Name: {venueDetail.data.name}
            <div>Address: {venueDetail.data.address}</div>
            <div>District: {venueDetail.data.district}</div>
            <div>Province: {venueDetail.data.province}</div>
            <div>Postalcode: {venueDetail.data.postalcode}</div>
            <div>Tel: {venueDetail.data.tel}</div>
            <div>Dailyrate: {venueDetail.data.dailyrate}</div>
            </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{vid:'001'},{vid:'002'},{vid:'003'}]
// }