import React, { Component } from 'react';
import Map from 'lodash/map';
import { url } from 'inspector';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

  componentDidMount(){
    const URL = 'https://www.potterapi.com/v1/houses?key=$2a$10$5wOJEuLpDgrj4Q4Ah0K9luTqacT518KBYUz5CIud2HDlJZIKFiXwy';

    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          return res.json();
        }
        console.warn('Voldemort struck!  No characters for you!')
        return undefined;
      })
      .then ((houses) => {
        if (!houses) {
          return undefined;
        }
        this.setState({ houses });
      });
  }

  render(

  )
}

export default Characters;
