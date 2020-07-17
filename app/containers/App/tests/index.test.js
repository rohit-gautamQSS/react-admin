import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// eslint-disable-next-line import/no-named-as-default-member
import App from '../index';

const renderer = new ShallowRenderer();

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<App />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
