"use client"

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { Dayjs } from "dayjs"

type Props = {
  onDateChange: (date: string) => void
  onVenueChange: (venue: string) => void
}

export default function LocationDateReserve({
  onDateChange,
  onVenueChange
}: Props) {

  return (
    <div className="bg-slate-100 rounded-lg gap-x-5 gap-y-2 
    w-fit px-10 py-5 flex flex-row justify-center">

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          onChange={(value: Dayjs | null) => {
            if (value) {
              onDateChange(value.format("YYYY-MM-DD")) // 🔥 ส่งค่า date
            }
          }}
        />
      </LocalizationProvider>

      <Select
        variant="standard"
        name="Venue"
        id="Venue"
        className="h-[2em] w-[200px]"
        onChange={(e) => onVenueChange(e.target.value as string)} // 🔥 ส่งค่า venue
      >
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>

    </div>
  )
}