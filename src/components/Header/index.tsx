import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { MapPin, PottedPlant, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink title="Home" to="/">
        <PottedPlant size={40} weight="fill" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
