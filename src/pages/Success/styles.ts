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

export const OrderInfo = styled.ul`
  width: 52.6rem;
  height: 27rem;

  margin-top: 19.2rem;
  margin-left: 16rem;

  padding: 4rem;
  border-radius: 6px 36px;

  position: relative;

  display: flex;
  flex-direction: column;

  background: white;
  list-style: none;
  gap: 3.2rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      ${(props) => props.theme["yellow-400"]},
      ${(props) => props.theme["green-600"]}
    );
    z-index: -1;
    margin: -1.6px;
    border-radius: 6px 36px;
  }
`;

const ICON_COLORS = {
  yellowDark: "yellow-600",
  yellow: "yellow-400",
  green: "green-600",
} as const;

interface OrderInfoWithIconProps {
  iconColor: keyof typeof ICON_COLORS;
}

export const OrderInfoWithIcon = styled.li<OrderInfoWithIconProps>`
  height: 5.2rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["gray-700"]};
  gap: 1.2rem;

  p {
    font-size: 1.6rem;
    line-height: 130%;
  }

  strong {
    font-size: 1.6rem;
  }

  svg {
    border-radius: 9999px;
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.8rem;
    padding: 0.8rem;
    border-radius: 9999px;

    background: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
    color: ${(props) => props.theme["gray-100"]};

    width: 3.2rem;
    height: 3.2rem;
  }
`;
