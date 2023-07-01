import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { Content, PaymentMethodContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <Content>
          {icon}
          {label}
        </Content>
      </label>
    </PaymentMethodContainer>
  );
});
