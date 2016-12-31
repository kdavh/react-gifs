import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { debounce } from 'lodash';

import urls from '../constants/urls';
import GifSwatch from './GifSwatch';
import GifDisplay from './GifDisplay';
import logoSvg from '../../static/images/logo.svg';
import GiphyApi from '../services/GiphyApi';
import './App.scss'

const DEFAULT_SEARCH = "monkey pie";
const DEFAULT_CHOSEN_GIFS = [
  "https://media.giphy.com/media/13p77tfexyLtx6/giphy.gif",
  "https://media.giphy.com/media/iLqpYAbKGOrqU/giphy.gif",
  "https://media.giphy.com/media/8ytDUrlW9JbG0/giphy.gif",
  "https://media.giphy.com/media/PekRU0CYIpXS8/giphy.gif"
].map(url => ({ url: url, id: url }));
const SEARCH_DELAY = 200;
const MAX_SEARCH_RESULTS = 10;

@DragDropContext(HTML5Backend)
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifResults: [],
      chosenGifs: DEFAULT_CHOSEN_GIFS
    }
  }

  componentDidMount() {
    this.fetchResults(DEFAULT_SEARCH)
  }

  render() {
    return (
      <div className="App">
        <header className="App_masthead">
          <h1>
            <a href="/">
              <img className="App_mastheadImage" src={logoSvg} />
              <span className="App_mastheadLink">Gifs</span>
            </a>
          </h1>
        </header>

        <div className="App_content">
          <aside className="App_aside">
            <input
              className="App_searchInput"
              onChange={::this.onSearchChange}
              name="search"
              placeholder="Search" />
            { this.state.gifResults.map((gif) => (
              <GifSwatch key={gif.id} gif={gif} />
            ))}

          </aside>
          <main className="App_main">
            { this.state.chosenGifs.map((gif, i) => (
              <GifDisplay
                gif={gif}
                key={gif.id}
                onDrop={gif => this.replaceChosen(i, gif)} />
            )) }
          </main>
        </div>

        <footer className="App_footer">
          <a href={urls.claraHomepage} target="_blank">About Clara</a>
          {' | '}
          <a href={urls.claraCareers} target="_blank">Work at Clara</a>
        </footer>
      </div>
    );
  }

  onSearchChange(event) {
    clearTimeout(this.SearchDoneTimeout);
    let search = event.target.value || "";

    this.SearchDoneTimeout = setTimeout(() =>
      this.fetchResults(search)
    , SEARCH_DELAY)
  }

  fetchResults(keywords) {
    GiphyApi.search(keywords)
      .then(gifs => this.setState({
        gifResults: gifs.slice(0, MAX_SEARCH_RESULTS)
      }))
  }

  replaceChosen(i, newGif) {
    let currentChosen = this.state.chosenGifs;
    if (currentChosen.find(gif => gif.id === newGif.id)) {
      return;
    }
    currentChosen[i] = newGif;

    this.setState({ chosenGifs: currentChosen });
  }
}
