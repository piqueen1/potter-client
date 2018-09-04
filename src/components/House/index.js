import React, { Component } from 'react';

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {},
    };
  }

  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f?key=%242a%2410%245wOJEuLpDgrj4Q4Ah0K9luTqacT518KBYUz5CIud2HDlJZIKFiXwy';

    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
        console.warn('Voldemort struck!  No house for you!');
        return undefined;
      })
      .then((houses) => {
        if (!houses) {
          return undefined;
        }
        this.setState({ house: houses[0] });
      });
  }

  getKeys() {
    let keyArray = Object.keys(this.state.house).forEach((key) => {
      console.log('key: ', key);

      return key;
    }, this);
    return keyArray;
  }

  getValues() {
    let valueArray = Object.values(this.state.house).forEach((value) => {
      console.log('value: ', value);

      return value;
    }, this);
    return valueArray;
  }

  render() {
    console.log(this.state.house);

    return (
      <div className="house">
        <h1> Here are the keys: {this.getKeys()} </h1>
        <h2> Here are the values: {this.getValues()} </h2>
        {this.state.house.name} dearly holds these values to be sacred: {this.state.house.values}.
      </div>
    );
  }
}

export default House;
