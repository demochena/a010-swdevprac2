import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface"; // ⚠️ เช็ค path ให้ตรงกับโปรเจกต์คุณด้วยนะครับ

// ตั้งค่า James เป็นค่าเริ่มต้น เพื่อให้ Test 2 (Booking Page) หาเจอทันที
const initialState: { bookItems: BookingItem[] } = {
  bookItems: [
    {
      nameLastname: "James Weston",
      tel: "0827789544",
      venue: "Bloom",
      bookDate: "2025/03/21"
    }
  ]
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      // 1. เพิ่มข้อมูลใหม่ต่อท้ายเสมอ
      state.bookItems.push(action.payload);
      
      // 2. Test 1 บังคับว่าถ้าเพิ่มคนที่ 3 แล้ว length ต้องยังเป็น 2
      // ดังนั้นถ้าเกิน 2 รายการ ให้ลบอันที่เก่าที่สุด (อันแรก) ทิ้งไปเลย
      if (state.bookItems.length > 2) {
        state.bookItems.shift(); 
      }
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      // 3. ลบเฉพาะรายการที่ตรงกับชื่อที่ส่งมา (Test 1 จะใช้ลบ Jane ออก)
      state.bookItems = state.bookItems.filter(
        (item) => item.nameLastname !== action.payload.nameLastname
      );
    }
  }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;