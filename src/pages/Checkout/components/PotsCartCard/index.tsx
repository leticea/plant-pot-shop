import { ButtonsContainer, RemoveButton, SelectedPotCard } from "./styles";
import beige from "../../../../assets/beige.avif";
import { QuantityButton } from "../../../../components/QuantityButton";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

export function PotsCartCard() {
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <>
      <SelectedPotCard>
        <div>
          <img src={beige} alt="" />
          <div>
            Trapezio
            <ButtonsContainer>
              <QuantityButton
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={quantity}
              />

              <RemoveButton type="button" title="Remover">
                <Trash size={23} />
              </RemoveButton>
            </ButtonsContainer>
          </div>
        </div>
        <div className="values">
          <p>R$ 79,90</p>
          <p>M</p>
        </div>
        <hr />
      </SelectedPotCard>
    </>
  );
}
