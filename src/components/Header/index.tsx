import pageLogo from "../../assets/plant.png";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={pageLogo} alt="Image de uma plantinha dentro de um vaso marrom" />
    </HeaderContainer>
  )
}