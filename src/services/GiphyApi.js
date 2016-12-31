import 'whatwg-fetch';

const GIPHY_API_KEY = "dc6zaTOxFJmzC"

const GiphyApi = {
  search: function(keywords) {
    keywords = keywords.trim().replace(/\s+/g, "+");

    return new Promise((resolve, reject) => {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${keywords}&api_key=${GIPHY_API_KEY}`)
        .then(resp => resp.json())
        .then(json => {
          resolve(json.data.map(this._processResult));
        })
    })
  },

  _processResult: function(result) {
    return {
      id: result.id,
      thumbnailStillUrl: result.images.fixed_height_small_still.url,
      thumbnailUrl: result.images.downsized.url,
      url: result.images.original.url
    }
  }
}

export default GiphyApi;
