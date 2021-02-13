import React from 'react';
import App from './App';

import {shallow, mount} from 'enzyme'

describe('App tests', () => {

    it('renders without crashing', () => {
      const wrapper = mount(<App />);

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
});