import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { MapPin, PottedPlant, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "../../contexts/PotsContext";

export function Header() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink title="Home" to="/">
        <PottedPlant size={45} weight="fill" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          {cartQuantity != 0 && <span>{cartQuantity}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
