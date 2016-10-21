import React from 'react'

class Messages extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      message: ''
    }
  }

  handleChange(e) {
    this.setState({message: e.target.value})
    e.preventDefault()
  }

  handleSubmit(e) {
    this.props.submit(this.state.message)
    this.setState({message: ''})
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.message} onChange={this.handleChange} type='text' placeholder='message'/>
        </form>
      </div>
    )
  }
}

module.exports = Messages
