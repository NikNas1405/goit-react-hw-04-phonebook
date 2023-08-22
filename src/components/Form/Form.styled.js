// import styled from 'styled-components';

// export const Title = styled.h2`
//   color: #008080;
//   text-transform: uppercase;
//   margin-bottom: 12px;
// `;

import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  width: 300px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 24px;
  color: #008080;
  margin: 12px 4px;
`;

// export const StyledError = styled(ErrorMessage)`
//   color: ${p => p.theme.colors.error};
// `;

export const StyledFormButton = styled.button`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  width: 100px;
  cursor: pointer;
  color: #008080;
  background-color: #cdf7d6;

  &:is(:focus, :hover) {
    color: #1c1694;
    background-color: #5cff7c;
  }
`;
