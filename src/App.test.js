import React from 'react';
import App from './App';

import {shallow, mount} from 'enzyme'

describe('App tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

    it('renders without crashing', () => {
       wrapper = mount(<App />);

      expect(wrapper.debug()).toMatchSnapshot();
    });
    
//     it('renders player status correctly', () => {
//       const props = {
//         winner: 'X',
//         board : Array(9).fill(null),
//         player: null
//       }

//       const wrapper = mount(<App playerStatus={props.player}/>)

//       console.log("board: ", wrapper)

// const winner = wrapper.find('div.winnerBoard').text()
// expect(winner).toEqual('X')
//   });

    it('renders a button', () => {
      const button = wrapper.find('button');
        expect(button.length).toBe(1);
    })
});