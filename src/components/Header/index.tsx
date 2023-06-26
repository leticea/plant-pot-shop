import { NavLink } from "react-router-dom";
import pageLogo from "../../assets/plant.png";
import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink title="Home" to="/">
        <img
          src={pageLogo}
          alt="Imagem de uma plantinha dentro de um vaso marrom"
        />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
