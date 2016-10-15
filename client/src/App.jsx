import React from 'react'
import ReactDOM from 'react-dom'
import Channels from './Channels.jsx'
import Messages from './Messages.jsx'

const App = () => (
  <div>
    <Channels />
    <Messages />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
