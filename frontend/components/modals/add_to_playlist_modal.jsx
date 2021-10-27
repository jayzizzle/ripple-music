import React from 'react';

class AddToPlaylistModal extends React.Component {
  constructor(props) {
    super(props);
    this.postPlaylistTrack = this.props.postPlaylistTrack.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newTrack) {
    this.postPlaylistTrack(newTrack);
    this.props.onClose();
  }

  render() {
    const { playlists, trackId } = this.props;
    return (
      <div
        className={`modal ${this.props.show ? 'show' : ''}`}
        onClick={this.props.onClose}
      >
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <p className='modal-header'>Add To Playlist</p>
          <ul className='modal-ul'>
            {playlists.map((playlist) => (
              <li
                onClick={() =>
                  this.handleClick({
                    playlistId: playlist.id,
                    trackId: trackId,
                  })
                }
                key={playlist.id}
              >
                <span className='playlist-plus'>+</span>
                {playlist.title}
              </li>
            ))}
            <li onClick={this.props.onClose} className='playlist-cancel'>
              <span className='playlist-plus'>-</span>Cancel
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AddToPlaylistModal;
