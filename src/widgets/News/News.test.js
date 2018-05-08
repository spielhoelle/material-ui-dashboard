import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

import News from './News';

it('should find the title', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<News />, div);
  // Render a card with label in the document
  const card = shallow(<News />).dive();

  console.log(card.debug());


  expect(card.find('#cardtitle').text()).to.contain('Word of the Day')
  // expect(wrapper.state('createdAt')).toEqual(now);
  ReactDOM.unmountComponentAtNode(div);
});
