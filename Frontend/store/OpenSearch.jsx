import React, { useState, useContext } from "react";

export const StoreContext = React.createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");
  const [searchHotel, setSearchHotel] = useState([]);

  const [openNav, setOpenNav] = useState(true);
  const [hotel, setHotel] = useState("");
  const [imageHotel, setImageHotel] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [favNum, setFavNum] = useState(0);

  return (
    <StoreContext.Provider
      value={{
        openDate,
        setOpenDate,
        openOptions,
        setOpenOptions,
        hotel,
        setHotel,
        openNav,
        setOpenNav,
        imageHotel,
        setImageHotel,
        destination,
        setDestination,
        searchHotel, 
        setSearchHotel,
        isFav, setIsFav,
        favNum, setFavNum,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
