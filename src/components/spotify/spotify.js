import React from 'react';
import {connect} from 'react-redux';
import {fetchAlbums} from '../../actions';


class Spotify extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchAlbums())
  }

  componentDidlMount() {

  }
  componentDidUpdate() {

  }

  render() {
    return (
      <div>
        {
          this.props.spotify.albums.map(
            (album, index) =>
              <div key={index}>
                <h2>{album.name}</h2>
                <h3>{album.data.release_date}</h3>
              </div>
          )
        }
      </div>
    );
  }
}

export default connect(store => ({spotify: store.spotify}))(Spotify);
