import React from 'react';
import styled from '@emotion/styled';

const StyledH3 = styled('h3')({
  backgroundColor: 'green'
});

interface BasicGreetingsProps {
  children: React.ReactNode;
}

const BasicGreetings: React.FunctionComponent<BasicGreetingsProps> = ({ children }) => (
  <StyledH3>Hello {children}</StyledH3>
);

export default BasicGreetings;
