import styled from "styled-components";

export const Container = styled.div`
  width: 56rem;
  height: 21.6rem;
  margin: 3.2rem auto auto auto;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
    padding: 1.2rem;
    font-size: 1.4rem;
    border: 0.1rem solid ${(props) => props.theme["gray-400"]};
    border-radius: 4px;
    background: ${(props) => props.theme["gray-300"]};

    &:focus {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
      border: 0.1rem solid ${(props) => props.theme["yellow-600"]};
    }
  }

  .cep {
    width: 20rem;
  }

  .street {
    width: 100%;
  }

  .number {
    width: 20rem;
    margin: 0 1.2rem auto auto;
  }

  .complement {
    width: 34.8rem;
  }

  .district {
    width: 20rem;
    margin: 0 1.2rem auto auto;
  }

  .city {
    width: 27rem;
    margin: 0 1.2rem auto auto;
  }

  .state {
    width: 6.6rem;
  }
`;
