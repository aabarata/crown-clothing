import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpenHandler = () => toggleIsCartOpen();

  return (
    <CartIconContainer onClick={toggleIsCartOpenHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
