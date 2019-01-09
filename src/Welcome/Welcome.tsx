import React, { Fragment, PureComponent } from 'react';
import { TextField, Typography } from '@material-ui/core';

import Greetings from './Greetings';
import BasicGreetings from './BasicGreetings';
import GreetingsWithStyle from './GreetingsWithStyle';
import GreetingsWithTheme from './GreetingsWithTheme';

interface WelcomeState {
  name: string;
}

class Welcome extends PureComponent<{}, WelcomeState> {
  state = {
    name: '',
  };

  handleUpdateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <form noValidate>
        <Typography variant="h4">
          Welcome to MUI 3.8 + Emotion 10 example
        </Typography>
        <Typography variant="body1">
          Set your name and you'll have a greeting
        </Typography>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={this.handleUpdateName}
          margin="normal"
        />
        {name && (
          <Fragment>
            <Greetings>{name}</Greetings>
            <BasicGreetings>{name}</BasicGreetings>
            <GreetingsWithStyle>{name}</GreetingsWithStyle>
            <GreetingsWithTheme>{name}</GreetingsWithTheme>
          </Fragment>
        )}
      </form>
    );
  }
}

export default Welcome;
