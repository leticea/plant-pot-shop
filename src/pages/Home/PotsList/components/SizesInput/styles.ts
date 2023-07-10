import styled, { css } from "styled-components";

export const SizeTypesContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${(props) => css`
      background: ${props.theme["green-300"]};
      border-color: ${props.theme["green-700"]};

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
  */
