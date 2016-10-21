export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE'
export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'

export function submitMessage(channel, text, user) {
  return {
    type: SUBMIT_MESSAGE,
    channel,
    text,
    user
  }
}

export function fetchMessages() {
  return {
    type: FETCH_MESSAGES_REQUEST,
  }
}

export function receiveMessages(messages) {
  return {
    type: FETCH_MESSAGES_SUCCESS,
    messages
  }
}
