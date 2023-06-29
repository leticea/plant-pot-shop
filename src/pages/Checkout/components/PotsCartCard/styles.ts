import styled from "styled-components";

export const SelectedPotCard = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 0.8rem 0.4rem;
  gap: 48px;

  min-width: 36.8rem;
  height: 8rem;
  margin-bottom: 2.4rem;

  div {
    display: flex;

    font-size: 1.6rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};

    width: 255px;
    height: 64px;

    div {
      gap: 0.8rem;
      flex-direction: column;
    }
  }

  hr {
    position: absolute;
    margin: 9.6rem 0;
    width: 36.8rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
  }

  p {
    min-width: 8rem;
    height: 2.1rem;

    font-weight: 700;
    font-size: 1.6rem;
    line-height: 130%;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${(props) => props.theme["gray-700"]};
  }

  img {
    margin: auto 2rem auto 0;
    width: 6.4rem;
    height: 6.4rem;
    mix-blend-mode: multiply;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;

  align-items: center;
  gap: 8px;

  width: 17.1rem;
  height: 3.2rem;
`;

export const RemoveButton = styled.button`
  width: 9.1rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0px 8px;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;

  font-size: 1.2rem;
  text-transform: uppercase;

  background: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-700"]};
  transition: all 0.2s;

  svg {
    color: ${(props) => props.theme["green-600"]};
  }

  &:hover {
    background: ${(props) => props.theme["gray-500"]};
  }
`;
