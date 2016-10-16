import {combineReducers} from 'redux'
import {SUBMIT_MESSAGE, submitMessage} from './actions'

function messages(state = [], action) {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      
    default:
      return state
  }
}

const chatApp = combineReducers({
  messages
})
