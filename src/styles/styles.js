import styled, { css } from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Li = styled.li`
  border-width: 1px;
  border-style: solid;
  border-left-width: 5px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  column-gap: 8px;
  ${({ theme }) => css`
    border-color: ${theme};
  `}
`;

export const Span = styled.span`
  text-transform: capitalize;
  overflow: hidden;
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.1);
`;
