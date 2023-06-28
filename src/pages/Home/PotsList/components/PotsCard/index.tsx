import { useState } from "react";
import { moneyFormat } from "../../../../../utils/moneyFormat";
import {
  Button,
  Buttons,
  Description,
  Footer,
  Name,
  PotsCardContainer,
  Tags,
} from "./styles";
import { QuantityButton } from "../../../../../components/QuantityButton";
import { ShoppingCartSimple } from "@phosphor-icons/react";

export interface PlantPotsProps {
  id: number;
  tags: string[];
  name: string;
  image: string;
  description: string;
  price: number;
}

interface PlantPotsCardProps {
  pots: PlantPotsProps;
}

export function PotsCard({ pots }: PlantPotsCardProps) {
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  const handleQuantity = quantity;
  const isSubmitDisabled = !handleQuantity;

  return (
    <PotsCardContainer key={pots.id}>
      <img src={pots.image} alt="" />
      {pots.tags.map((tag) => {
        return <Tags key={tag}>{tag}</Tags>;
      })}
      <Name>{pots.name}</Name>
      <Description>{pots.description}</Description>
      <Footer>
        <p>
          R$
          <span>{moneyFormat(pots.price)}</span>
        </p>
        <Buttons>
          <QuantityButton
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
        </Buttons>
        <Button disabled={isSubmitDisabled}>
          <ShoppingCartSimple weight="fill" size={21} />
        </Button>
      </Footer>
    </PotsCardContainer>
  );
}
