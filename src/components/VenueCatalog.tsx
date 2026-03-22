import Link from 'next/link';
import Card from './Card';
import {VenueItem, VenueJson } from '../../interface';

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
    
    
    const venuesJsonReady = await venuesJson;

    return (
        <>
            
            <div className="text-lg font-semibold m-5 mt-64">Explore {venuesJsonReady.count} venues in our catalog
            </div>

            <div
                style={{
                    margin: "20px",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-around",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    padding: "10px"
                }}
            >
                {
                    
                    venuesJsonReady.data.map((venueItem: VenueItem) => (
                        <Link
                            href={`/venue/${venueItem.id}`}
                            key={venueItem.id}
                            className="w-1/5"
                        >
                            
                            <Card
                                venueName={venueItem.name}
                                imgSrc={venueItem.picture}
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}