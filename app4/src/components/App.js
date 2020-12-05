import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

import youtube from '../api/youtube'

export default class App extends Component {
  state = { videos: [], selectedVideo: null}

  onVideoSelect = video => this.setState({ selectedVideo: video })
  

  onTermSubmit = async query => {
    const response = await youtube.get('/search',{
      params:{
        ...youtube.defaults.params,
        q: query
      }
    })

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0] 
    })
  }

  componentDidMount () {
    this.onTermSubmit('')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ui eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="ui five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div> 
          </div>  
        </div> 
      </div>
    )
  }
}
