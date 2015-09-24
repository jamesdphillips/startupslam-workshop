
import { Component, createElement } from 'react';

import Header from './header';
import Channels from './channels';

/**
 * whatami
 */
export default class Sidebar extends Component {
  render() : Component {
    return <div className="sidebar">
      <Header/>
      Channels
      <Channels/>
    </div>;
  }
}
