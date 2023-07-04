import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { CheckoutCartCard } from "./components/CheckoutCartCard";
import { CheckoutForm } from "./components/CheckoutForm";
import { Payment } from "./components/Payment";
import { CartContext } from "../../contexts/PotsContext";
import { Title } from "./styles";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const { cleanCart } = useContext(CartContext);

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;
  const navigate = useNavigate();

  function confirmOrder(data: ConfirmOrderFormData) {
    console.log(data);
    navigate("/success", {
      state: data,
    });

    cleanCart();
  }

  return (
    <>
      <form onSubmit={handleSubmit(confirmOrder)}>
        <FormProvider {...confirmOrderForm}>
          <Title>
            <h1>Complete seu pedido</h1>
            <h1>Produtos selecionados</h1>
          </Title>
          <CheckoutForm />
          <Payment />
          <CheckoutCartCard />
        </FormProvider>
      </form>
    </>
  );
}
