import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["yellow-400"]};
  }
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["yellow-400"]};
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme["yellow-600"]};
  }

  body {
    background: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
  }
`;