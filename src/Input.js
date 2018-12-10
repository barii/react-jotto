import React from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class Input extends React.Component {
  render() {
    const contents = this.props.success
      ? null
      : (
        <form className='form-inline'>
          <input 
            data-test='input-box' 
            className='mb-2 mx-sm-3'
            id='word-guess'
            type='text'
            placeholder='enter guess'
          />
          <button 
            data-test='submit-button'
            className='btn btn-promary mb-2'
            onClick = {() => guessWord()}
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

const mapStateToProps = ({success}) => {
  return {success};
}

export default connect(mapStateToProps, { guessWord })(Input)