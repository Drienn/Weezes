import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Header from './Header';

storiesOf('Atoms/Header', module)
  .addDecorator(StoryRouter())
  .add('Default', () => <Header />);
