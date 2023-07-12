import { InputHTMLAttributes, forwardRef } from "react";
import { Content, SizeTypesContainer } from "./styles";

type SizesInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  handleLabel: (label: string) => void;
};

export const SizesInput = forwardRef<HTMLInputElement, SizesInputProps>(
  ({ id, label, handleLabel, ...props }, ref) => {
    return (
      <SizeTypesContainer>
        <input
          id={id}
          type="radio"
          {...props}
          name="size"
          ref={ref}
          onChange={() => handleLabel(label)}
        />
        <label htmlFor={id}>
          <Content>{label}</Content>
        </label>
      </SizeTypesContainer>
    );
  }
);
