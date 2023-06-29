import { moneyFormat } from "../../../../utils/moneyFormat";
import { Button, Confirmation } from "./styles";

export function ConfirmationCard() {
  const DELIVERY_PRICE = 5;
  return (
    <>
      <Confirmation>
        <p>
          Total de itens <span>R$ 79,90</span>
        </p>
        <p>
          Entrega <span>R$ {moneyFormat(DELIVERY_PRICE)}</span>
        </p>
        <h1>
          Total <span>R$ 84,90</span>
        </h1>
      </Confirmation>
      <Button type="submit">Confirmar pedido</Button>
    </>
  );
}
