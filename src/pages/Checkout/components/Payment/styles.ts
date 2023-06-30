import styled from "styled-components";

export const PaymentInfo = styled.div`
  width: 64rem;
  height: 20.7rem;

  margin: 40.5rem 0 10rem 16rem;
  padding: 4rem;
  border-radius: 6px;

  background: ${(props) => props.theme["gray-200"]};
  box-shadow: 0.1rem 0.7rem 1rem rgba(0, 0, 0, 0.1);

  .payment {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    display: flex;
    padding: 0;
    margin-left: -0.4rem;

    color: ${(props) => props.theme["gray-800"]};
  }

  span {
    display: flex;

    svg {
      display: flex;
      align-self: flex-end;
      margin-top: 0.2rem;
    }
  }

  p {
    margin-top: 0.2rem;
    padding: 0 3rem;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-700"]};
  }

  svg {
    margin: 0 1.2rem 0 0;
    color: ${(props) => props.theme["green-600"]};
  }
`;

export const PaymentMethods = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    margin: auto;
    grid-column: span 3;
    color: ${(props) => props.theme["base-error"]};
  }
`;
