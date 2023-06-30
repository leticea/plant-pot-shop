import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${(props) => css`
      background: ${props.theme["green-400"]};
      border-color: ${props.theme["green-600"]};

      &:hover {
        background: ${props.theme["green-400"]};
      }
    `}
  }
`;
