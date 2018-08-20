import React, { Component } from 'react';
import 'styles.css';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
    };
  }

  componentDidMount() {
    const url = "const url = 'https://www.potterapi.com/v1/houses?key=%242a%2410%245wOJEuLpDgrj4Q4Ah0K9luTqacT518KBYUz5CIud2HDlJZIKFiXwy';

    fetch(url)
      .then ((res) => {
        if(res.status >= 200 && res.status < 300) {
          return res.json();
        }
        console.warn('Voldemort struck! No houses for you!', res);
        return undefined;
      })
      .then ((houses) => {
        if(!houses) {
          return undefined;
        }
        this.setState({ houses });
      });
  }

  render() {
    return ();
  }
}
