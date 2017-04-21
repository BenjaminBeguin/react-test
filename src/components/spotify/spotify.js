import React from 'react';
import {connect} from 'react-redux';
import {fetchArtists} from '../../actions';


class Spotify extends React.Component {
  constructor() {
    super();

    this.state = {
      albums: [],
    }
  }

  componentWillMount() {
    this.props.dispatch(fetchArtists())
  }

  componentDidlMount() {

  }
  componentDidUpdate() {

  }

  render() {
    console.log(this.props);
    return (
      <div>
        {
          this.props.spotify.albums.map(
            (album, index) =>
              <h2 key={index}>
                {album.name}
              </h2>
          )
        }
      </div>
    );
  }
}

export default connect(store => ({spotify: store.spotify}))(Spotify);
