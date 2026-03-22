import { createSlice } from "@reduxjs/toolkit"

export interface BookingItem {
  nameLastname: string
  tel: string
  venue: string
  bookDate: string
}

type BookState = {
  bookItems: BookingItem[]
}

const initialState: BookState = {
  bookItems: []
}

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const index = state.bookItems.findIndex(
        (item) =>
          item.venue === action.payload.venue &&
          item.bookDate === action.payload.bookDate
      )

      if (index !== -1) {
        state.bookItems[index] = action.payload
      } else {
        state.bookItems.push(action.payload)
      }
    },

    removeBooking: (state, action) => {
      state.bookItems = state.bookItems.filter(
        (item) =>
          !(
            item.nameLastname === action.payload.nameLastname &&
            item.tel === action.payload.tel &&
            item.venue === action.payload.venue &&
            item.bookDate === action.payload.bookDate
          )
      )
    }
  }
})

export const { addBooking, removeBooking } = bookSlice.actions

export default bookSlice.reducer