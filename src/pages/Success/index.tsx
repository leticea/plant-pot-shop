import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";
import illustration from "../../assets/illustration.png";
import {
  IllustrationImage,
  Title,
  OrderInfo,
  OrderInfoWithIcon,
} from "./styles";

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

      <OrderInfo>
        <OrderInfoWithIcon iconColor="green">
          <MapPin size={15} weight="fill" />
          <div>
            <p>
              Entrega em <strong>Rua Papagaio, 411</strong>
            </p>
            <p>Jardins - São Paulo, SP</p>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon iconColor="yellow">
          <Timer size={15} weight="fill" />
          <div>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min</strong>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon iconColor="yellowDark">
          <CurrencyDollarSimple size={15} />
          <div>
            <p>Pagamento na entrega</p>
            <strong>Cartão de débito</strong>
          </div>
        </OrderInfoWithIcon>
      </OrderInfo>
    </>
  );
}
