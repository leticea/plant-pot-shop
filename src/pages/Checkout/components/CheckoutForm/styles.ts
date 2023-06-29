import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 64rem;
  height: 37.2rem;
  position: absolute;
  margin: -2rem 0 0 16rem;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-200"]};
`;

export const Headline = styled.div`
  height: 4.4rem;
  margin: 4rem 4rem auto 4rem;

  h1 {
    display: flex;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    margin-top: 0.2rem;
    padding: 0 3.1rem;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-700"]};
  }

  svg {
    margin: 0 0.8rem 0 0;
    color: ${(props) => props.theme["yellow-600"]};
  }
`;