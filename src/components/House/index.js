import React, { Component } from 'react';
import './styles.js';
import map from 'lodash/map';

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house : [],
    };
  }

  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/houses?key=%242a%2410%245wOJEuLpDgrj4Q4Ah0K9luTqacT518KBYUz5CIud2HDlJZIKFiXwy';
  
    fetch(url)
      .then ((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
        console.warn('Voldemort struck!  No house for you!');
        return undefined;
      })
      .then ((house) => {
        if (!house) {
          return undefined;
        }
        this.setState({ house });
      });
  }






}

export default House;
