import styled from "styled-components";

export const IllustrationImage = styled.div`
  img {
    position: absolute;
    width: 49.2rem;
    height: 29.3rem;
    left: 52%;
    top: 28.4rem;
  }
`;

export const Title = styled.div`
  position: absolute;
  min-width: 35.5rem;
  height: 7.5rem;
  margin: 8rem auto auto 16rem;

  .bold {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;

    color: ${(props) => props.theme["yellow-600"]};
  }

  .normal {
    font-size: 2rem;
    line-height: 180%;

    color: ${(props) => props.theme["gray-800"]};
  }
`;