import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentInfo, PaymentMethods } from "./styles";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function Payment() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <>
      <PaymentInfo>
        <span>
          <CurrencyDollar size={22} />
          <p className="payment">Pagamento</p>
        </span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <PaymentMethods>
          {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            <PaymentMethodInput
              key={label}
              id={key}
              icon={icon}
              label={label}
              value={key}
              {...register("paymentMethod")}
            />
          ))}
          {paymentMethodError && <p>{paymentMethodError}</p>}
        </PaymentMethods>
      </PaymentInfo>
    </>
  );
}
