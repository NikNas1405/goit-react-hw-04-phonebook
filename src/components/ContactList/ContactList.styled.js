import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
  align-items: center;
`;

export const ContactListItem = styled.li`
  color: #008080;
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  gap: 20px;
`;

export const ContactListItemText = styled.span`
  color: #008080;
  text-transform: uppercase;
`;

export const ContactListItemButton = styled.button`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  width: 100px;
  cursor: pointer;
  color: #008080;
  background-color: #cdf7d6;
  border: none;

  &:is(:focus, :hover) {
    color: #1c1694;
    background-color: #5cff7c;
  }
`;
