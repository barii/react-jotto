import React from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class Input extends React.Component {
  /**
   * Create ref for input box
   * @method constructor
   * @param {object} props - Component props
   * @returns {undefined} 
   */
  constructor(props) {
    super(props)

    this.inputBox = React.createRef();
  }

  submitGuessedWord = (e) => {
    e.preventDefault();

    const guessedWord = this.inputBox.current.value;
    if(guessWord && guessWord.length > 0) {
      this.props.guessWord(guessedWord);
    }

    this.inputBox.current.value = '';
  }

  render() {
    const contents = this.props.success
      ? null
      : (
        <form className='form-inline'>
          <input 
            data-test='input-box' 
            ref={this.inputBox}
            className='mb-2 mx-sm-3'
            id='word-guess'
            type='text'
            placeholder='enter guess'
          />
          <button 
            data-test='submit-button'
            className='btn btn-primary mb-2'
            onClick = {(e) => this.submitGuessedWord(e)}
            type='submit'>
            Submit
          </button>
        </form>
      )

    return (
      <div data-test='component-input'>
      { contents }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(Input)