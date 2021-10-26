import React from 'react';

class CreatePlaylistModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(() => this.props.history.push('/dashboard'));
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
          <h3>Create New Playlist</h3>
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
        </div>
      </div>
    );
  }
}

export default CreatePlaylistModal;
