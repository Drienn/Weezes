import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import 'index.css';

addDecorator(withNotes);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.(js|jsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
