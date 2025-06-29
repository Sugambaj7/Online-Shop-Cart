import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItemFromCart, clearCart, removeItemByOneFromCart, addToCart, calculateSubTotals } from "../features/cartSlice";

const Cart = () => {

    const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(calculateSubTotals());
  }, [cart.cartItems, dispatch]);


  const handleRemoveItemFromCart = (cartItem) => {
    console.log(cartItem, "remove item id");
    dispatch(removeItemFromCart(cartItem));
  };



  return (
    <div className="cart-container">
      <h2 className="text-2xl text-center mt-5 font-bold">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty flex flex-col items-center">
          <p className="text-lg pt-8">Your cart is currently empty</p>
          <div className="continue-shopping">
            <Link
              className="flex items-center pt-4 text-xl text-gray-400 hover:text-gray-600"
              to="/"
            >
              <GoArrowLeft />
              <span className="ml-4">Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-6 px-8">
          <div className="titles grid grid-cols-custom_cart_items_layout pb-4">
            <div className="text-lg uppercase">Product</div>
            <div className="text-lg uppercase">Price</div>
            <div className="text-lg uppercase">Quantity</div>
            <div className="text-lg uppercase">Total</div>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div
                className="cart-item grid grid-cols-custom_cart_items_layout gap-2 items-center border-t border-custom_black py-4 px-0"
                key={cartItem.id}
              >
                <div className="cart-product flex">
                  <img
                    className="w-[100px]"
                    src={cartItem.image}
                    alt={cartItem.name}
                  />
                  <div className="flex flex-col pl-8">
                    <h3 className="text-xl font-semibold">{cartItem.name}</h3>
                    <p className="text-sm">{cartItem.desc}</p>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleRemoveItemFromCart(cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity flex justify-center w-[130px]">
                  <button className="bg-slate-300 px-2 rounded text-white" onClick={() =>dispatch( removeItemByOneFromCart(cartItem))}>
                    -
                  </button>
                  <div className="count px-4">{cartItem.cartQuantity}</div>
                  <button className="bg-slate-300 px-2 rounded text-white" onClick={() => dispatch(addToCart(cartItem))}>
                    +
                  </button>
                </div>
                <div className="cart-product-total-price font-semibold">
                  ${cartItem.cartQuantity * cartItem.price}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary flex justify-between mt-8">
            <button className="clear-cart border border-custom_black px-8 h-9 text-semi_black rounded-md" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal flex justify-between">
                <span className="font-semibold text-xl">Subtotal</span>
                <span className="font-semibold text-xl">
                 ${cart.cartTotalAmount}
                </span>
              </div>
              <p className="font-extralight text-sm mt-1 mb-3 tracking-wide">
                Taxes and shipping calculated at checkout
              </p>
              <button className="bg-blue-500 text-white w-[100%] py-2 rounded-md">
                Checkout
              </button>
              <div className="continue-shopping pt-4">
                <Link
                  className="flex items-center text-gray-400 hover:text-gray-600"
                  to="/"
                >
                  <GoArrowLeft />
                  <span className="ml-2">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
