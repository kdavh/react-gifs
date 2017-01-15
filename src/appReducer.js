const DEFAULT_CHOSEN_GIFS = [
  "https://media.giphy.com/media/13p77tfexyLtx6/giphy.gif",
  "https://media.giphy.com/media/iLqpYAbKGOrqU/giphy.gif",
  "https://media.giphy.com/media/8ytDUrlW9JbG0/giphy.gif",
  "https://media.giphy.com/media/PekRU0CYIpXS8/giphy.gif"
].map(url => ({ url: url, id: url }));

const INITIAL_STATE = {
  search: "",
  gitResults: [],
  gifs: DEFAULT_CHOSEN_GIFS
}

import { updateSearchResults } from './actionCreators'

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

  case updateSearchResults.TYPE :
    const { gifResults } = action;

    return Object.assign(
      {}, { ...state, gifResults }
    )

  default:
    return state
  }
}
