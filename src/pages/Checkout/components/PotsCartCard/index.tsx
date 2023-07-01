import { ButtonsContainer, RemoveButton, SelectedPotCard } from "./styles";
import { QuantityButton } from "../../../../components/QuantityButton";
import { Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext, CartItem } from "../../../../contexts/PotsContext";
import { moneyFormat } from "../../../../utils/moneyFormat";
import { OrderData, sizeTypes } from "../../../Home";
import { useLocation } from "react-router-dom";
import { sizeTypes } from "../../../Home/PotsList/components/PotCard";

interface PotCartCardProps {
  pot: CartItem;
}


export function PotsCartCard({ pot }: PotCartCardProps) {

  const { removeCartItem, changeCartItemQuantity } = useContext(CartContext);

  const potsTotal = pot.price * pot.quantity;

  function handleIncrease() {
    changeCartItemQuantity(pot.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(pot.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(pot.id);
  }

  return (
    <>
      <SelectedPotCard>
        <div>
          <img src={pot.image} alt="" />
          <div>
            {pot.name}
            <ButtonsContainer>
              <QuantityButton
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={pot.quantity}
              />
              <RemoveButton
                onClick={handleRemove}
                type="button"
                title="Remover"
              >
                <Trash size={23} />
              </RemoveButton>
            </ButtonsContainer>
          </div>
        </div>
        <div className="values">
          <p>R$ {moneyFormat(potsTotal)}</p>
          <p>{sizeTypes.label}</p>
        </div>
        <hr />
      </SelectedPotCard>
    </>
  );
}
