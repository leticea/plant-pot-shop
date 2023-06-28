import { plantPots } from "../../../utils/plantPots";
import { PotsCard } from "./components/PotsCard";
import { Container, List } from "./styles";

export function PotsList() {
  return (
    <Container>
      <List>
        {plantPots.map((pots) => {
          return <PotsCard key={pots.id} pots={pots} />
        })}
      </List>
    </Container>
  );
}
