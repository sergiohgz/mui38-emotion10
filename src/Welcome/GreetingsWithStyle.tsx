import React from 'react';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

const StyledTypography = styled(Typography)({
  backgroundColor: '#fabada',
});

interface GreetingsWithStyleProps {
  children: React.ReactNode;
}

const GreetingsWithStyle: React.FunctionComponent<GreetingsWithStyleProps> = ({
  children,
}) => <StyledTypography variant="h6">Hello {children}</StyledTypography>;

export default GreetingsWithStyle;
