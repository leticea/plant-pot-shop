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
    user-select: none;
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

export const InfoGrid = styled.ul`
  width: 66.7rem;
  margin: 35.2rem 71.3rem 10.8rem 16rem;

  font-size: 2.3rem;
  line-height: 130%;
  color: ${(props) => props.theme["gray-700"]};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  position: absolute;
  left: 0;
  gap: 2rem;

  //border: 1px solid red;
`;

const ICON_COLORS = {
  yellowDark: "yellow-600",
  yellow: "yellow-400",
  green: "green-800",
  gray: "gray-700",
} as const;

interface InfoWithIconProps {
  iconColor: keyof typeof ICON_COLORS;
}

export const InfoWithIcon = styled.li<InfoWithIconProps>`
  display: flex;
  gap: 12px;

  svg {
    background: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
    color: ${(props) => props.theme["gray-100"]};

    padding: 0.8rem;
    border-radius: 9999px;

    width: 3.2rem;
    height: 3.2rem;
  }
`;
