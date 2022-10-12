import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart/cart.selector";
import { toggleIsCartOpen } from "../../store/cart/cart.action";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpenHandler = () => dispatch(toggleIsCartOpen());

  return (
    <CartIconContainer onClick={toggleIsCartOpenHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
