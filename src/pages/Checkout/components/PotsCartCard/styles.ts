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