import { Button, Confirmation } from "./styles";

export function ConfirmationCard() {
  return (
    <>
      <Confirmation>
        <p>
          Total de itens <span>R$ 79,90</span>
        </p>
        <p>
          Entrega <span>R$ 5,00</span>
        </p>
        <h1>
          Total <span>R$ 84,90</span>
        </h1>
      </Confirmation>
      <Button type="submit">Confirmar pedido</Button>
    </>
  );
}
