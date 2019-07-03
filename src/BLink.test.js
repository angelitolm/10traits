import React from 'react';
import ReactDOM from 'react-dom';
import BNavbar from './components/BNavbar';
import { withInactiveLinks } from './stories/BNavbar.stories';

it('renders inactive links at the start of the list', () => {
  const div = document.createElement('div');
  const events = { onInactive: jest.fn(), onActive: jest.fn() };
  ReactDOM.render(<BNavbar links={withInactiveLinks} {...events} />, div);

  // Esperamos que la tarea titulada "Tarea 6 (anclada)" se ejecute primero, no al final.
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
})
