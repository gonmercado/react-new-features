import React from 'react';
import { UserContext } from '../../../../../../userContext';

class Nieto1 extends React.Component {
  render() {
    return (
      <div>
        <p>Nieto 1</p>
        <input value={ this.context.userName } onChange={ (ev) => this.context.changeUser(ev.target.value) } />
      </div>
    )
  }
}

Nieto1.contextType = UserContext;

export default Nieto1;