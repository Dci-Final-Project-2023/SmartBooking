import { Carousel } from "flowbite-react";
import React, { useContext } from "react";
import { StoreContext } from "../../../store/OpenSearch";
import HotelStore from "../../../store/hotel/HotelStore";

function SpCarousel() {
 

  const hotel = HotelStore((state) => state.hotel);
  return (
    <div className="h-96 w-96 px-1">
      <Carousel>
        {hotel?.photos?.map((image, key) => {
          return (
            <div key={key} className="">
              <img
                src={image}
                alt={image}
                className="h-96 w-96 object-cover rounded-md"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SpCarousel;
