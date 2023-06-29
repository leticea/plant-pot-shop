import { SelectedPotCard } from "./styles";
import beige from "../../../../assets/beige.avif";

export function PotsCartCard() {
  return (
    <>
      <SelectedPotCard>
        <div>
          <img src={beige} alt="" />
        </div>
      </SelectedPotCard>
    </>
  );
}
