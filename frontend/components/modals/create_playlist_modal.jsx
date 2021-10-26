import React from 'react';

class CreatePlaylistModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      userId: this.props.userId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postPlaylist(this.state).then(() => this.props.onClose());
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div
        className={`modal ${this.props.show ? 'show' : ''}`}
        onClick={this.props.onClose}
      >
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <label className='session-label'>
            Enter Title
            <br />
            <input
              type='text'
              placeholder='Enter Title'
              value={this.state.title}
              onChange={this.update('title')}
              className='session-input-text'
            />
          </label>
          <br />
          <button
            onClick={this.handleSubmit}
            className='session-form-btn cyan-btn'
          >
            Create Playlist
          </button>
        </div>
      </div>
    );
  }
}

export default CreatePlaylistModal;
