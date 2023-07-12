import styled from "styled-components";

export const SelectedPotCard = styled.section`
  display: flex;
  min-width: 37rem;
  min-height: 8rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    min-width: 12rem;
    font-size: 1.7rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
    padding: 0.8rem 0.4rem;

    div {
      gap: 0.8rem;
      flex-direction: column;
    }
  }

  hr {
    position: absolute;
    margin: 11.7rem 0;
    width: 36.8rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
  }

  .values {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 130%;
    display: grid;
    justify-items: end;
    padding-right: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  img {
    margin-right: 1.5rem;
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
  width: 7.2rem;
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
    color: ${(props) => props.theme["green-700"]};
  }

  &:hover {
    background: ${(props) => props.theme["gray-500"]};
  }
`;
