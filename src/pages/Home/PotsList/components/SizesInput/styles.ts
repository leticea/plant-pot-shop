import styled, { css } from "styled-components";

export const SizeTypesContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${(props) => css`
      background: ${props.theme["green-500"]};
      border: 1px solid ${props.theme["green-700"]};
      transition: 0.2s;

      &:hover {
        background: ${props.theme["green-600"]};
      }
    `}
  }
`;

export const Content = styled.div`
  width: 4rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.4rem;
  position: relative;
  padding: 0.4rem 0.8rem;
  top: 13rem;
  border-radius: 100px;

  background: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-900"]};
  font-weight: 700;
  font-size: 1.7rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["green-500"]};
  }
`;
