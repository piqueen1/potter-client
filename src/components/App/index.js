import React, { Component } from 'react';
// import map from 'lodash/map';
import styled from 'styled-components';
// import toLower from 'lodash/toLower';
// import logo from '../../assets/images/logo.svg';
import House from '../House';
import './styles.css';

// eslint-disable-next-line
const Sentence = styled.p`
  color : ${props => props.color};
  font-size : 16px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/characters/?key=%242a%2410%245wOJEuLpDgrj4Q4Ah0K9luTqacT518KBYUz5CIud2HDlJZIKFiXwy&house=Gryffindor';

    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
        console.warn('Fails to obtain characters', res);
        return undefined;
      })
      .then((characters) => {
        if (!characters) {
          return undefined;
        }
        this.setState({ characters });
      });
  }

  render() {
    console.log(this.state.characters);
    return (
      <div className="House">
        <House />
        {/*
        <div>
          {map(this.state.characters, character => (
            <Sentence key={character.id} color={toLower(character.role) === 'student' ? 'red' : 'black'}>
              <div>{character.name} is a {character.bloodStatus}</div>
            </Sentence>
          ))}
        </div> */}
      </div>
    );
  }
}

export default App;
