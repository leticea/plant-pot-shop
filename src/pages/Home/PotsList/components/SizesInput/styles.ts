import styled, { css } from "styled-components";

export const SizeTypesContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${(props) => css`
      background: ${props.theme["yellow-400"]};
      border-color: ${props.theme["yellow-600"]};

      &:hover {
        background: ${props.theme["yellow-100"]};
      }
    `}
  }
`;

export const Content = styled.div`
  max-width: 5rem;
  height: 2.1rem;
  display: flex;
  margin: 0 0.4rem;
  align-items: center;
  position: relative;
  padding: 0.4rem 0.8rem;
  top: 13rem;
  border-radius: 100px;

  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-600"]};
  font-weight: 700;
  font-size: 1.8rem;
  text-transform: uppercase;

  /* padding: 0 1rem;
  margin: 3.2rem 0;
  background: ${(props) => props.theme["yellow-400"]};
  color: ${(props) => props.theme["gray-800"]};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  height: 5rem;
  width: 3rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  transition: 0.3s;
  user-select: none;

  &:hover {
    background: ${(props) => props.theme["gray-500"]};
  } */
`;
