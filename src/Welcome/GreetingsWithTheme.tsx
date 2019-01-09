import React from 'react';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

const ThemedTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

interface GreetingsWithThemeProps {
  children: React.ReactNode;
}

const GreetingsWithTheme: React.FunctionComponent<GreetingsWithThemeProps> = ({
  children,
}) => <ThemedTypography variant="h6">Hello {children}</ThemedTypography>;

export default GreetingsWithTheme;
