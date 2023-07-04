import { Introduction } from "./Introduction";
import { PotsList } from "./PotsList";
import { OurPlantPots } from "./PotsList/components/OurPlantPots";

export function Home() {
  return (
    <>
      <Introduction />
      <OurPlantPots />
      <PotsList />
    </>
  );
}
