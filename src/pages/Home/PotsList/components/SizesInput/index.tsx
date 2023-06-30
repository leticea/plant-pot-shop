import { InputHTMLAttributes, forwardRef } from "react";
import { Content, SizeTypesContainer } from "./styles";

type SizesInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const SizesInput = forwardRef<HTMLInputElement, SizesInputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <SizeTypesContainer>
        <input id={id} type="radio" {...props} name="size" ref={ref} />
        <label htmlFor={id}>
          <Content>{label}</Content>
        </label>
      </SizeTypesContainer>
    );
  }
);
