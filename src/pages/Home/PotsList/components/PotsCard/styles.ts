import styled from "styled-components";

export const PotsCardContainer = styled.li`
  background: ${(props) => props.theme["gray-200"]};
  width: 25.6rem;
  height: 31rem;
  position: relative;
  border-radius: 6px 36px;

  display: flex;
  justify-content: center;

  img {
    display: flex;
    justify-content: center;
    width: 12rem;
    height: 12rem;
    top: -20px;
    left: 27%;
    position: absolute;
  }
`;
