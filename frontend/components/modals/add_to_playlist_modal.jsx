import React from 'react';

class AddToPlaylistModal extends React.Component {
  constructor(props) {
    super(props);
    // this.postPlaylistTrack = this.props.postPlaylistTrack.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div
        className={`modal ${this.props.show ? 'show' : ''}`}
        onClick={this.props.onClose}
      >
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          ADD MODAL
        </div>
      </div>
    );
  }
}

export default AddToPlaylistModal;
