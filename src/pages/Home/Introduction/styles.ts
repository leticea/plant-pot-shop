import styled from "styled-components";

export const Container = styled.div`
  height: 40rem;
  display: flex;
  align-items: center;
  position: relative;

  border: 1px solid red;

  h1 {
    width: 100%;
    margin-left: -6rem;
    font-size: 16rem;
    font-family: "Baloo 2";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;

    //border: 1px solid red;

    background-image: linear-gradient(
      to right,
      ${(props) => props.theme["green-500"]},
      ${(props) => props.theme["green-700"]}
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
