import React from 'react';
import { Typography } from '@material-ui/core';

interface GreetingsProps {
  children: React.ReactNode;
}

const Greetings: React.FunctionComponent<GreetingsProps> = ({ children }) => (
  <Typography variant="h6">Hello {children}</Typography>
);

export default Greetings;
