import { ArrowsOutCardinal, Plant, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Container, InfoGrid, InfoWithIcon } from "./styles";

export function Introduction() {
  return (
    <Container>
      <p>Plant-Pot-Shop</p>

      <InfoGrid>
        <InfoWithIcon iconColor="yellowDark">
          <ShoppingCart size={16} weight="fill" />
          Compra simples e segura
        </InfoWithIcon>

        <InfoWithIcon iconColor="gray">
          <ArrowsOutCardinal size={16} weight="fill" />
          Três tamanhos diferentes a seu gosto
        </InfoWithIcon>

        <InfoWithIcon iconColor="yellow">
          <Timer size={16} weight="fill" />
          Entrega rápida e rastreada
        </InfoWithIcon>

        <InfoWithIcon iconColor="green">
          <Plant size={16} weight="fill" />
          Suas plantinhas ficarão bem confortáveis
        </InfoWithIcon>
      </InfoGrid>
    </Container>
  );
}
