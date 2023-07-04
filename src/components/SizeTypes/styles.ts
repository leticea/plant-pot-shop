import styled, { css } from "styled-components";

export const Tags = styled.div`
  display: flex;

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
  margin: 0 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  padding: 0.4rem 0.8rem;
  top: 13rem;
  border-radius: 100px;
  cursor: pointer;

  background: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-900"]};
  font-weight: 700;
  font-size: 2.5rem;
  text-transform: uppercase;
  cursor: pointer;


    &:hover {
      background: ${(props) => props.theme["green-500"]};
    }
`;
