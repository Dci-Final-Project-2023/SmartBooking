import { create } from "zustand";

const HotelStore = create((set) => ({
  hotel: {},
  setHotel: (newHotel) => set({ hotel: newHotel }),
}));

export default HotelStore;


