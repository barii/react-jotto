import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'
import { getSecretWord } from './actions'
import './App.css';
import { PropTypes } from 'prop-types';

export class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {

    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

App.propTypes = {
  success: PropTypes.bool,
  secretWord: PropTypes.string,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  )
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, { getSecretWord })(App);
