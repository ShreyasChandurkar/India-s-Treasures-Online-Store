import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  // console.log(currentProdElem);

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  // console.log(quantity, price);

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 0) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updateCart = { id, quantity, price };
    updateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
    showToast("add", id);
  }
  if (existingProd) {
    return false;
  }
  price = Number(price * quantity);
  quantity = Number(quantity);

  // let updateCart={id, quantity, price};
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


  updateCartValue(arrLocalStorageProduct);

  showToast("add",id);
};
