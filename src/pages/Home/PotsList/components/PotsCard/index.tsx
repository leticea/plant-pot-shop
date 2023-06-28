import { PotsCardContainer } from "./styles";

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

export function PotsCard() {
  return (
    <PotsCardContainer>oi</PotsCardContainer>
  )
}
