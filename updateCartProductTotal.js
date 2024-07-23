import { getCartProductFromLS } from "./getCartProduct";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLS();
  let intialValue = 0;
  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, intialValue);
//   console.log(totalProductPrice);

productSubTotal.textContent=`₹${totalProductPrice}`;
productFinalTotal.textContent=`₹${totalProductPrice+50}`;
};
