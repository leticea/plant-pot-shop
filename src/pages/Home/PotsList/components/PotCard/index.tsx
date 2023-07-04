import { useContext, useState } from "react";
import { moneyFormat } from "../../../../../utils/moneyFormat";
import {
  Button,
  Buttons,
  Description,
  Footer,
  Name,
  PotsCardContainer,
  // Tags,
} from "./styles";
import { QuantityButton } from "../../../../../components/QuantityButton";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CartContext } from "../../../../../contexts/PotsContext";
import { SizesInput } from "../SizesInput";
import { SizeTypes } from "../../../../../components/SizeTypes";

export interface PlantPotProps {
  id: number;
  tags: string[];
  name: string;
  image: string;
  description: string;
  price: number;
}

interface PlantPotCardProps {
  pot: PlantPotProps;
}

// export const sizeTypes = {
//   small: {
//     label: "P",
//   },
//   medium: {
//     label: "M",
//   },
//   large: {
//     label: "G",
//   },
// };

export function PotCard({ pot }: PlantPotCardProps) {
  const { addPotToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  function addToCart() {
    const potToAdd = {
      ...pot,
      quantity,
    };

    addPotToCart(potToAdd);
  }

  const handleQuantity = quantity;
  const isSubmitDisabled = !handleQuantity;

  return (
    <PotsCardContainer key={pot.id}>
      <img src={pot.image} alt="" />
      {/* {Object.entries(sizeTypes).map(([key, { label }]) => {
        const potID = `${pot.id}-${label}`;
        return <SizesInput key={potID} id={potID} label={label} value={key} />;
      })} */}
      <SizeTypes />
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
