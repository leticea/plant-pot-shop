import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";
import illustration from "../../assets/illustration.png";
import {
  IllustrationImage,
  Title,
  OrderInfo,
  OrderInfoWithIcon,
} from "./styles";
import { OrderData } from "../Checkout";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { paymentMethods } from "../Checkout/components/Payment";

interface LocationType {
  state: OrderData;
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;
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
              Entrega em <strong>{state.street}, {state.number}</strong>
            </p>
            <p>{state.district} - {state.city}, {state.state}</p>
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
            <strong>{paymentMethods[state.paymentMethod].label}</strong>
          </div>
        </OrderInfoWithIcon>
      </OrderInfo>
    </>
  );
}
