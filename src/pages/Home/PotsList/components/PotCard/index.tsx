import { useContext, useState } from "react";
import { moneyFormat } from "../../../../../utils/moneyFormat";
import {
  Button,
  Buttons,
  Description,
  Footer,
  Name,
  PotsCardContainer,
} from "./styles";
import { QuantityButton } from "../../../../../components/QuantityButton";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CartContext } from "../../../../../contexts/PotsContext";
import { SizesInput } from "../SizesInput";

export interface PlantPotProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface PlantPotCardProps {
  pot: PlantPotProps;
}

export const sizeTypes = {
  small: {
    label: "P",
  },
  medium: {
    label: "M",
  },
  large: {
    label: "G",
  },
};

export function PotCard({ pot }: PlantPotCardProps) {
  const { addPotToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [label, setLabel] = useState("");

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  function handleLabel(labelParameter: string) {
    setLabel(labelParameter);
  }

  function addToCart() {
    const cartItemID = `${pot.id}-${label}`;
    
    const potToAdd = {
      ...pot,
      quantity,
      label,
      cartItemID
    };

    addPotToCart(potToAdd);
  }

  const isSubmitDisabled = quantity === 0 || label === "";

  return (
    <PotsCardContainer key={pot.id}>
      <img src={pot.image} alt="" />
      {Object.entries(sizeTypes).map(([key, { label }]) => {
        const potID = `${pot.id}-${label}`;
        return <SizesInput key={potID} id={potID} label={label} value={key} handleLabel={handleLabel} />;
      })}
      <Name>{pot.name}</Name>
      <Description>{pot.description}</Description>
      <Footer>
        <p>
          R$
          <span>{moneyFormat(pot.price)}</span>
        </p>
        <Buttons>
          <QuantityButton
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
        </Buttons>
        <Button onClick={addToCart} disabled={isSubmitDisabled}>
          <ShoppingCartSimple weight="fill" size={21} />
        </Button>
      </Footer>
    </PotsCardContainer>
  );
}
