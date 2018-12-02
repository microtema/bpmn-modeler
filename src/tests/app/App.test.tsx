import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../../app/App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render correctly text component', () => {
    expect({ foo: 'bar' }).toMatchSnapshot();
  });
});
