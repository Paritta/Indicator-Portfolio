import React from 'react';
import App from './App';
import Timer from './src/Component/Timer'
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  let rendered = renderer.create(<Timer />).toJSON();
  expect(rendered).toMatchSnapshot();


  rendered = renderer.create(<Timer />).toJSON();
  expect(rendered).toMatchSnapshot();
});

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });
