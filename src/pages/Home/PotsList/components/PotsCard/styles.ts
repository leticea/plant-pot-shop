import styled from "styled-components";

export const PotsCardContainer = styled.li`
  width: 25.6rem;
  height: 35rem;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme["gray-200"]};
  position: relative;
  border-radius: 6px 36px;
  user-select: none;

  //border: 1px solid blue;


  img {
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    top: -6px;
    left: 27%;
    position: absolute;
    mix-blend-mode: multiply;

    //border: 1px solid blue;
  }
`;

export const Tags = styled.span`
  max-width: 19.5rem;
  height: 2.1rem;
  display: flex;
  margin: 0 0.4rem;
  align-items: center;
  position: relative;
  padding: 0.4rem 0.8rem;
  top: 11.2rem;
  border-radius: 100px;

  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-600"]};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.6rem;
  position: absolute;
  left: 2rem;
  right: 2rem;
  top: 14.9rem;

  color: ${(props) => props.theme["gray-800"]};
  font-family: "Baloo 2";
  font-size: 2rem;
  line-height: 130%;
`;

export const Description = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.6rem;
  position: absolute;
  left: 2rem;
  right: 2rem;
  top: 18.3rem;

  color: ${(props) => props.theme["gray-600"]};
  font-family: "Roboto";
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 130%;

  //border: 1px solid blue;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: absolute;
  height: 3.8rem;
  left: 2.4rem;
  right: 2.4rem;
  bottom: 2rem;

  p {
    width: 6.7rem;
    height: 3.1rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.4rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  span {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2.4rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const Buttons = styled.div`
  width: 7.2rem;
  height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 6px;

  margin: 0 0 0 16px;

  font-weight: 400;
  font-size: 1.6rem;
  color: ${(props) => props.theme["gray-900"]};
  background-color: ${(props) => props.theme["gray-400"]};

  span {
    font-weight: 400;
    font-family: "Roboto";
    font-size: 1.6rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["green-600"]};
    user-select: none;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme["green-800"]};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  border-radius: 6px;
  border: none;
  padding: 0.8rem;
  cursor: pointer;

  background: ${(props) => props.theme["green-800"]};
  color: ${(props) => props.theme["gray-200"]};
  transition: all 0.2s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;