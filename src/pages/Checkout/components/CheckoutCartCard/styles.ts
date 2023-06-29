import styled from "styled-components";

export const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  user-select: none;
  gap: 24px;

  position: absolute;
  width: 44.8rem;
  min-height: 30.8rem;
  left: 83.2rem;
  top: 18.7rem;

  border-radius: 6px 44px;
  background: ${(props) => props.theme["gray-200"]};
  box-shadow: 0.1rem 0.7rem 1rem rgba(0, 0, 0, 0.1);
`;
