import styled from "styled-components";

export const Container = styled.div`
  height: 40rem;
  display: flex;
  align-items: center;
  position: relative;

  //border: 1px solid red;

  p {
    width: 100%;
    margin-left: -6rem;
    font-size: 16rem;
    font-family: "Baloo 2";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;

    text-decoration: none;

    //border: 1px solid red;

    background-image: linear-gradient(
      to right,
      ${(props) => props.theme["green-500"]},
      ${(props) => props.theme["green-700"]}
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      content: "";
      position: absolute;
      width: 159.6rem;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme["green-700"]};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;
