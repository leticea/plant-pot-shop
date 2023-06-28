import { Description, Name, PotsCardContainer, Tags } from "./styles";

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
  return (
    <PotsCardContainer key={pots.id}>
      <img src={pots.image} alt="" />
      {pots.tags.map((tag) => {
        return <Tags key={tag}>{tag}</Tags>;
      })}
      <Name>{pots.name}</Name>
      <Description>{pots.description}</Description>
    </PotsCardContainer>
  );
}
