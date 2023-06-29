import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: max-content;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  .uf {
    max-width: 3.75rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto 1fr;

    .cep {
      grid-column: span 2;
      max-width: max-content;
    }

    .street {
      grid-column: span 2;
    }

    .complement {
      grid-column: span 1;
    }

    .uf {
      max-width: max-content;
    }
  }
`;