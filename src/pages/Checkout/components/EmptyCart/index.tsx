import { ShoppingCartSimple } from "@phosphor-icons/react";
import { EmptyCartCard } from "./styles";

export function EmptyCart() {
  return (
    <EmptyCartCard>
      <p>Seu carrinho está vazio</p>
      <ShoppingCartSimple />
    </EmptyCartCard>
  );
}
