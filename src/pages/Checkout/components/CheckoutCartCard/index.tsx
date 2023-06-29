import { ConfirmationCard } from "../ConfirmationCard";
import { PotsCartCard } from "../PotsCartCard";
import { OrderCard } from "./styles";

export function CheckoutCartCard() {
  return (
    <>
      <OrderCard>
        <PotsCartCard />
        <ConfirmationCard />
      </OrderCard>
    </>
  )
}