import React from "react";

import "./App.css";
import youtube from "./config/api";
import SearchBar from "./components/search-bar/SearchBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoList from "./components/VideoList/VideoList";
class App extends React.Component {
  state = {
    videos: [],
    currentVideo: null,
  };

  onSearchSubmit = (value) => {
    console.log(value);
    youtube
      .get("/search", {
        params: {
          q: value,
        },
      })
      .then((res) => {
        this.setState({
          videos: res.data.items,
          currentVideo: res.data.items[0],
        });
        console.log(this.state.videos);
      })
      .catch((err) => console.log(err.message));
  };

  selectVideo = (video) => {
    console.log(video);
    this.setState({ currentVideo: video });
  };
  render() {
    return (
      <div className="App">
        <SearchBar handleSubmit={this.onSearchSubmit} />
        <div className="search-result">
          {this.state.videos.length > 0 ? (
            <VideoPlayer
              video={this.state.currentVideo || this.state.videos[0]}
            />
          ) : null}
          {this.state.videos.length > 0 ? (
            <VideoList
              videos={this.state.videos}
              selectVideo={this.selectVideo}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
