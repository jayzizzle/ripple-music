import React from 'react';

class EditPlaylistModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.playlist.title,
      userId: this.props.userId,
      id: this.props.playlist.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearPlaylistErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.patchPlaylist(this.state).then(() => this.props.onClose());
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    const { errors } = this.props;
    return (
      <ul className='playlist-errors'>
        {errors.map((error, i) => (
          <li className='' key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
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
            Rename Playlist
          </button>
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}

export default EditPlaylistModal;
