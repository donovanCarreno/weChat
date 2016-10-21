import React from 'react'
import ReactDOM from 'react-dom'
import Channels from './Channels'
import Messages from './Messages'
import MessageEntry from './MessageEntry'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      channels: ['general'],
      messages: []
    }
  }

  handleSubmit(message) {
    let currentMessages = this.state.messages
    currentMessages.push(message)

    this.setState({
      messages: currentMessages
    })
  }

  render () {
    return (
      <div>
        <div>
          <Channels channels={this.state.channels}/>
        </div>
        <div>
          <Messages submit={this.handleSubmit}/>
        </div>
        <div>
          {this.state.messages.map(message => (
            <MessageEntry message={message}/>
          ))}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
