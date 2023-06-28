import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityButtons } from "./styles";

interface QuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityButton({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityButtonProps) {
  return (
    <>
      <QuantityButtons>
        <Minus size={14} onClick={onDecrease} />
        <span>{quantity}</span>
        <Plus size={14} onClick={onIncrease} />
      </QuantityButtons>
    </>
  );
}
