import { useContext } from "react";
import { ConfirmationCard } from "../ConfirmationCard";
import { EmptyCart } from "../EmptyCart";
import { PotsCartCard } from "../PotsCartCard";
import { OrderCard } from "./styles";
import { CartContext } from "../../../../contexts/PotsContext";

export function CheckoutCartCard() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <OrderCard>
        {cartItems.length !== 0 ? (
          cartItems.map((pot) => <PotsCartCard key={pot.id} pot={pot} />)
        ) : (
          <EmptyCart />
        )}
        <ConfirmationCard />
      </OrderCard>
    </>
  );
}
