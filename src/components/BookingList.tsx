"use client"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { removeBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interface" // ⚠️ เช็ค path ด้วยนะครับ

export default function BookingList() {
  const bookings = useSelector((state: RootState) => state.bookSlice?.bookItems || [])
  const dispatch = useDispatch()

  if (bookings.length === 0) {
    return (
      <div className="text-green-600 text-lg mt-5">
        No Venue Booking
      </div>
    )
  }

  return (
    <div className="mt-5 space-y-3 px-5">
      {bookings.map((item: BookingItem, index: number) => (
        <div
          key={index}
          className="border p-4 rounded-md shadow-sm bg-white"
        >
          <div><strong>Name:</strong> {item.nameLastname}</div>
          <div><strong>Tel:</strong> {item.tel}</div>
          <div><strong>Venue:</strong> {item.venue}</div>
          <div><strong>Date:</strong> {item.bookDate}</div>

          <button
            onClick={() => dispatch(removeBooking(item))} // ⚠️ สำคัญมาก ต้องส่ง item เข้าไปด้วย!
            className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  )
}