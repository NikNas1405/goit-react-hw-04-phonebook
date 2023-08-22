import styled from 'styled-components';

export const ContactFilterDiv = styled.div`
 text-align: center;
`;

export const TextFilter = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #008080;
  
`;

export const InputFilter = styled.input`
  border-radius: 5px;
  padding: 4px 8px;

  &:hover {
    border: 2px solid #008080;
  }

  &:focus {
    border: 2px solid #008080;
    outline: none;
    color: #008080;
  }
`;
