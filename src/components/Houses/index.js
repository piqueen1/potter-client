import React, { Component } from 'react';
import map from 'lodash/map';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
    };
  }

  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/houses?key=%242a%2410%245wOJEuLpDgrj4Q4Ah0K9luTqacT518KBYUz5CIud2HDlJZIKFiXwy';

    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
        console.warn('Voldemort struck! No houses for you!', res);
        return undefined;
      })
      .then((houses) => {
        if (!houses) {
          return undefined;
        }
        this.setState({ houses });
      });
  }

  render() {
    console.log(this.state.houses);

    return (
      <div className="houses">
        {map(this.state.houses, house => (
          <div className="house" key="house._id">
            <div className="name">
              {house.name}
            </div>
            <div className="mascot">
              {house.mascot}
            </div>
            <div className="headOfHouse">
              {house.headOfHouse}
            </div>
            <div className="houseGhost">
              { house.houseGhost }
            </div>
            <div className="values">
              {house.values}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Houses;
