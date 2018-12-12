import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'
import { getSecretWord } from './actions'
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessesWords, secretWord } = state;
  return { success, guessesWords, secretWord };
}

export default connect(mapStateToProps, { getSecretWord })(App);
