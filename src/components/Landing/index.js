import React from 'react';
import './styles.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
}

export default Landing;
