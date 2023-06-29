import { MapPin } from "@phosphor-icons/react";
import illustration from "../../assets/illustration.png";
import { IllustrationImage, Title } from "./styles";

export function Success() {
  return (
    <>
      <IllustrationImage>
        <img src={illustration} />
      </IllustrationImage>
      <Title>
        <p className="bold">Uhu! Pedido confirmado</p>
        <p className="normal">
          Agora é só aguardar que logo o produto chegará até você
        </p>
      </Title>

      <ul>
        <li>
          <MapPin size={15} weight="fill" />
          <div>
            <p>Entrega em <strong>Rua Papagaio, 411</strong></p>
          </div>
        </li>
      </ul>
    </>
  );
}
