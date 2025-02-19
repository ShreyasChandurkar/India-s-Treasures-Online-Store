import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  //update the localstorage ag=fter removing the item
  localStorage.setItem(
    "cartProductLS",
    JSON.stringify(cartProducts)
  );

  //remove the div by clicking
  let removeDiv=document.getElementById(`card${id}`);
  if(removeDiv){
    removeDiv.remove();
    //show toast when product added to the cart
    showToast("delete", id);
  }

  updateCartValue(cartProducts);
};
