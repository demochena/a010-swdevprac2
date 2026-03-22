import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import CarCatalog from '@/components/VenueCatalog'
import getVenues from "@/libs/getVenues";
export default async function Venue(){
    const venues = await getVenues()
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Venue Page</h1>
            <VenueCatalog venuesJson={venues}/>
        </main>
    )
}