import { useState, useEffect, createContext, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext(null);

export const useCart = () => {
  return useContext(CartContext);
};

const getValueFromLocalstorage = () => {
  const cart = localStorage.getItem("cart");
  console.log({ cart });
  return cart ? JSON.parse(cart) : [];
};

// cart = []
// tshirt (add to cart ) => cart.push(tshirt)
// ihpne (add to cart) => cart.push(ihpne(quqnity 1)) => quantity = 1+1 =2
// cart ihpne 2   (incremnt decrement)
//      thsirt 1

function CartProvider({ children }) {
  const [cart, setCart] = useState(getValueFromLocalstorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCartIncrement = (index) => {
    cart[index].quantity++;
    setCart([...cart]);
  };

  const handleCartDecrement = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart([...cart]);
  };

  const handleAddToCart = (product) => {
    const productExist = cart.find(({ _id }) => product._id === _id);
    console.log({ productExist });
    if (productExist) {
      alert("ok");
      productExist.quantity++;
    } else {
      cart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
    // if new product

    setCart([...cart]);
  };

  const resetCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCartDecrement,
        handleCartIncrement,
        handleAddToCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
