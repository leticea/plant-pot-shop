import { MapPinLine } from "@phosphor-icons/react";
import { InfoContainer, Headline } from "./styles";

export function CheckoutForm() {
  return (
    <InfoContainer>
      <Headline>
          <h1>
            <MapPinLine size={22} />
            Endereço de Entrega
          </h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </Headline>
    </InfoContainer>
  )
}