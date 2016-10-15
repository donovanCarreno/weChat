import React from 'react'
import ReactDOM from 'react-dom'
import Channels from './Channels'
import Messages from './Messages'

const App = () => (
  <div>
    <div>
      <Channels />
    </div>
    <div>
      <Messages />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
