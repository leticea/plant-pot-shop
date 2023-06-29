import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 2.3rem;
  margin: 4rem 0;
  padding: 0 3rem 0 16rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  place-content: center;

  font-family: "Baloo 2";
  font-size: 2.5rem;
  line-height: 130%;
  color: ${(props) => props.theme["gray-800"]};
`;