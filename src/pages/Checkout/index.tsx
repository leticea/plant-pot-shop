import { CheckoutForm } from "./components/CheckoutForm";
import { Title } from "./styles";

export function Checkout() {
  return (
    <>
      <form>
        <Title>
          <h1>Complete seu pedido</h1>
          <h1>Produtos selecionados</h1>
        </Title>
        <CheckoutForm />
      </form>
    </>
  );
}
