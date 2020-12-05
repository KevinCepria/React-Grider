import React, { Component } from 'react'

export default class SearcBar extends Component {
  state = {
    term: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value.toLocaleUpperCase() })}/>
          </div>
        </form>
      </div>
    )
  }
}
