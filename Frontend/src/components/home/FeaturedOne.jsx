import React, { useContext, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StoreContext } from "../../../store/OpenSearch";

const FeaturedOne = () => {
    const{favNum, setFavNum} = useContext(StoreContext);
    const[isFav, setIsFav] = useState(false)
    const handleClick = (event)=>{
        if(isFav=== true){
               setFavNum(favNum-1)


             }
             if(isFav === false){
               setFavNum(favNum +1)
            }
        event.preventDefault();
      setIsFav(!isFav);
      console.log(favNum)
        event.stopPropagation();
      }
     
  return (
    <button
      className="h-9 w-9 ml-auto text-red-500  hover:cursor-pointer hover:text-red-700"
      onClick={handleClick}
    >
      {isFav ? (
        <FavoriteIcon
          aria-hidden="true"
        />
      ) : (
        <FavoriteBorderIcon
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default FeaturedOne;
