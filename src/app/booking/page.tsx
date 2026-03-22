"use client"

import LocationDateReserve from "@/components/DateReserve"
import { TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addBooking } from "@/redux/features/bookSlice"

export default function Booking() {
    const dispatch = useDispatch()

    const [nameLastname, setNameLastname] = useState("")
    const [tel, setTel] = useState("")
    const [venue, setVenue] = useState("Bloom")
    const [bookDate, setBookDate] = useState("")

    const handleSubmit = () => {
        dispatch(
            addBooking({
                nameLastname,
                tel,
                venue,
                bookDate
            })
        )

        alert("Booking success!")
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 pt-10">

            <div className="text-xl font-medium">New Booking</div>

            <div className="w-fit space-y-2">

                {/* Name */}
                <TextField
                    variant="standard"
                    label="Name-Lastname"
                    value={nameLastname}
                    onChange={(e) => setNameLastname(e.target.value)}
                />

                {/* Tel */}
                <TextField
                    variant="standard"
                    label="Contact-Number"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />

                {/* Date */}
                <LocationDateReserve
                    onDateChange={(date) => setBookDate(date)}
                    onVenueChange={(venue) => setVenue(venue)}
                    />

            </div>

            <button
                onClick={handleSubmit}
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
            >
                Book Venue
            </button>

        </main>
    )
}