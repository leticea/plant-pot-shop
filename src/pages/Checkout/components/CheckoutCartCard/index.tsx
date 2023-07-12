import { useContext } from "react";
import { CartContext } from "../../../../contexts/PotsContext";
import { ConfirmationCard } from "../ConfirmationCard";
import { EmptyCart } from "../EmptyCart";
import { PotsCartCard } from "../PotsCartCard";
import { OrderCard } from "./styles";

export function CheckoutCartCard() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <OrderCard>
        {cartItems.length !== 0 ? (
          cartItems.map((pot) => (
            <PotsCartCard key={pot.cartItemID} pot={pot} />
          ))
        ) : (
          <EmptyCart />
        )}
        <ConfirmationCard />
      </OrderCard>
    </>
  );
}
