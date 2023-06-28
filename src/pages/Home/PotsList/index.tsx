import { plantPots } from "../../../utils/plantPots";
import { PotsCard } from "./components/PotsCard";
import { Container, List } from "./styles";

export function PotsList() {
  return (
    <Container>
      <List>
        {plantPots.map((coffee) => {
          return <PotsCard key={coffee.id} pots={pots} />;
        })}
      </List>
    </Container>
  );
}
