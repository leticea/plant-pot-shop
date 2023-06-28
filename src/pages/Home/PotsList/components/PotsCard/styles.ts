import styled from "styled-components";

export const PotsCardContainer = styled.li`
  width: 25.6rem;
  height: 31rem;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme["gray-200"]};
  position: relative;
  border-radius: 6px 36px;

  img {
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    top: -20px;
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
  text-align: center;
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
