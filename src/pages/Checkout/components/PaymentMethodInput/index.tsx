import { InputHTMLAttributes, ReactNode, forwardRef } from "react"
import { PaymentMethodContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>

    </PaymentMethodContainer>
  )
})

