import React from 'react';

class ClassState extends React.Component {
  state = {
    value: 0
  };

  handleButtonClick = () => this.setState(oldState => ({ value: oldState.value + 1 }));

  render() {
    return (
      <div className={ 'card' }>
        <h2>Clase con state tradicional</h2>
        <p>{ this.state.value }</p>
        <button onClick={ this.handleButtonClick }>Incrementar</button>
      </div>
    )
  }
}

export default ClassState;