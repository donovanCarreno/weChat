export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE'

export function submitMessage(channel, text) {
  return {
    type: SUBMIT_MESSAGE,
    channel,
    text
  }
}

/*
submitMessage will have to submit to db;
need a separate process for returning all
messages from db for that channel
*/
