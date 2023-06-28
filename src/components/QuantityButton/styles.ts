import styled from "styled-components";

export const QuantityButtons = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.2rem;
  height: 3.2rem;
  border-radius: 6px;
  gap: 4px;

  font-size: 1.6rem;
  color: ${(props) => props.theme["gray-900"]};
  background-color: ${(props) => props.theme["gray-400"]};

  span {
    font-weight: 400;
    font-family: "Roboto";
    font-size: 1.6rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["green-600"]};

    &:hover {
      color: ${(props) => props.theme["green-800"]};
    }
  }
`;