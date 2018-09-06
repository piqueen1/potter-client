import React, { Component } from 'react';
import map from 'lodash/map';
class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {},
    };
  }

  componentDidMount() {
    const houseID = '5a05e2b252f721a3cf2ea33f';
    const APIkey = '%242a%2410%245wOJEuLpDgrj4Q4Ah0K9luTqacT518KBYUz5CIud2HDlJZIKFiXwy';

    const url = `https://www.potterapi.com/v1/houses/${houseID}?key=${APIkey}`;

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

  render() {
    console.log(this.state.house);

    return (
      <div className="house">
        <div className="house-name">{this.state.house.name}</div>
        <div className="phrase">dearly holds these values to be sacred: </div>
        <div className="house-k-v-pairs">
          {map(this.state.house, (value, key) => (
            <div className="value" key={key}>
              {key} : {JSON.stringify(value)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default House;
