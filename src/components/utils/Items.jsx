import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Items = ({
  ifExists,
  id,
  color = 'from-gray-700 to-gray-900', // Add default values for color and shadow
  shadow = 'shadow-lg',
  title,
  description,
  image,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const AddtoCart = () => {
    const item = { id, title, description, image, color, shadow, rating, price };
    dispatch(setAddItemToCart(item));
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        CartState: true,
      })
    );
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} flex flex-col justify-between rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 min-h-[400px]`}
      >
        <div className="flex justify-center mt-4">
          <img
            src={image}
            alt={title}
            className="h-36 w-64 transitions-theme hover:-rotate-12 sm:h-24 sm:w-40"
          />
        </div>
        <div className="grid items-center justify-items-center flex-grow">
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base sm:text-sm font-medium filter drop-shadow">
            {title}
          </h1>
          {/* <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {description}
          </p> */}
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center justify-between bg-white/80 px-1 rounded">
              <h1 className="text-sm lg:text-base">{price}</h1>
            </div>
            <div className="flex items-center">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4 sm:w-3 sm:h-3" />
              <h1 className="md:text-sm text-xs font-normal text-slate-100 ml-1">
                {rating.rate}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={AddtoCart}
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
              onClick={() => { AddtoCart(); onCartToggle(); }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Items;
