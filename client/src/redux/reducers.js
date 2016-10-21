import {combineReducers} from 'redux'
import {SUBMIT_MESSAGE, RECEIVE_MESSAGES, submitMessage, receiveMessages} from './actions'

function messages(state = [], action) {
  switch (action.type) {
    case SUBMIT_MESSAGE:

    case RECEIVE_MESSAGES:
      
    default:
      return state
  }
}

const chatApp = combineReducers({
  messages
})
