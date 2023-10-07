import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { cartContext } from '../../../context/CartContext/CartContext';
import toast from 'react-hot-toast';
import { favoutiteContext } from '../../../context/FavouriteContext/FavouriteContext';
import { useQuery } from 'react-query';

export default function Product({ product }) {
  const { getFav } = useContext(favoutiteContext);
  const {data}  = useQuery('checkFav', getFav);



  const iconFav= useRef()
  const { imageCover, category: { name }, title, price, ratingsAverage, id } = product;
  const { addProductToCart, setnumberOfCartItems } = useContext(cartContext);
  const { addtoFavoutite, setNumberOfFavourite } = useContext(favoutiteContext);

  async function addtoCart(id) {
    const response = await addProductToCart(id);
    console.log(response)
   
  }

  async function addToWishList(id) {
      await addtoFavoutite(id)
      iconFav.current.classList.add('text-danger')
  }


  const isFavorite = data && data.data.some((fav) => fav.id === id);
  const heartIconClass = isFavorite ? ' text-danger' : null;

  return (
    <>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
        <div className="item product cursor-pointer p-2 rounded-2">
          <Link to={`/productDetails/${id}`}>
            <img className="w-100" src={imageCover} alt="" />
            <p className="font-sm text-main fw-bold m-0">{name}</p>
            <p className="fw-bold">{title.split(' ').splice(0, 2).join(' ')}</p>
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-bold">{price} EGP</span>
              <span>
                <i className="fas fa-star rating-color"></i>
                {ratingsAverage}
              </span>
            </div>
          </Link>
          <div className="d-flex">
            <button onClick={()=> addtoCart(id)} className="btn w-100 bg-main text-white me-2 font-sm">
              Add To Cart <i className="fa-solid fa-cart-shopping "></i>
            </button>
            <i ref={iconFav}  onClick={() => addToWishList(id)} className={` fas fa-heart fa-2x ms-auto  ${heartIconClass}`}></i>
          </div>
        </div>
      </div>
    </>
  );
}
