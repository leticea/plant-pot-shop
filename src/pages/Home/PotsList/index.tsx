import { plantPots } from "../../../utils/plantPots";
import { PotCard } from "./components/PotCard";
import { Container, List } from "./styles";

export function PotsList() {
  return (
    <Container>
      <List>
        {plantPots.map((pot) => {
          return <PotCard key={pot.id} pot={pot} />;
        })}
      </List>
    </Container>
  );
}
