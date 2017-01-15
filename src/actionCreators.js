import GiphyApi from './services/GiphyApi';

function makeBasicActionCreator(type, ...argNames) {
  const actionCreator = function(...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }

  actionCreator.TYPE = type

  return actionCreator
}

//export const updateSearch = makeBasicActionCreator('UPDATE_SEARCH', 'search')
export const updateSearchResults = makeBasicActionCreator('UPDATE_SEARCH_RESULTS', 'gifResults')

// thunk async action creators
export function updateSearch(keywords) {
  return function(dispatch) {
    GiphyApi.search(keywords)
      .then(gifs => dispatch(updateSearchResults(gifs)))
  }
}
