import { CurrencyDollar } from "@phosphor-icons/react";
import { PaymentInfo } from "./styles";

export function Payment() {
  return (
    <>
      <PaymentInfo>
        <span>
          <CurrencyDollar size={22} />
          <p className="payment">Pagamento</p>
        </span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </PaymentInfo>
    </>
  )
}