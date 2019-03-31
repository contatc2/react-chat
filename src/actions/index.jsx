export const SET_MESSAGES = 'SET_MESSAGES';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function setMessages(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: SET_MESSAGES,
        payload: data.messages
      };
    });
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
}
