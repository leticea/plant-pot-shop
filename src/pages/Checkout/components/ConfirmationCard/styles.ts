import styled from "styled-components";

export const Confirmation = styled.section`
  min-width: 37rem;
  height: 9.2rem;
  display: grid;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.2rem;

    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-700"]};

    span {
      font-size: 1.6rem;
    }
  }

  h1 {
    display: flex;
    justify-content: space-between;
    align-self: end;

    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};

    span {
      font-size: 2rem;
    }
  }
`;

export const Button = styled.button`
  width: 36.8rem;
  height: 4.6rem;
  padding: 1.2rem 0.8rem;
  margin-top: 2.4rem;
  border: none;
  cursor: pointer;
  border-radius: 6px;

  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;

  background: ${(props) => props.theme["yellow-400"]};
  color: ${(props) => props.theme["white"]};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-600"]};
  }

  &:disabled {
    background: ${(props) => props.theme["yellow-400"]};
    cursor: not-allowed;
  }
`;
