import { FormProvider, useForm } from "react-hook-form";
import { Introduction } from "./Introduction";
import { PotsList } from "./PotsList";
import { OurPlantPots } from "./PotsList/components/OurPlantPots";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export enum sizeTypes {
  small = "small",
  medium = "medium",
  large = "large",
}

const confirmOrderFormValidationSchema = zod.object({
  sizeType: zod.nativeEnum(sizeTypes, {
    errorMap: () => {
      return { message: "Escolha o tamanho" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Home() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      sizeType: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;
  const navigate = useNavigate();


  function confirmOrder(data: ConfirmOrderFormData) {
    navigate("/checkout", {
      state: data,
    });
  }

  return (
    <>
      <Introduction />
      <OurPlantPots />
      <FormProvider {...confirmOrderForm}>
        <PotsList />
      </FormProvider>
    </>
  );
}
