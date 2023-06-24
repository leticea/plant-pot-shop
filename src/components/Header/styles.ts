import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 16rem;
  background-color: ${(props) => props.theme["gray-500"]};


  img {
    width: 160px;
    height: 160px;
  }
`;
