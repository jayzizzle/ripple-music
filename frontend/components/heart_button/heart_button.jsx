import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

class HeartButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleHeart() {
    const { itemId, hearts } = this.props;
    return !!hearts[itemId] ? <FaHeart /> : <FaRegHeart />;
  }

  handleClick(e) {
    const { postHeart, deleteHeart, userId, itemId, hearts, itemKey } =
      this.props;
    if (!!hearts[itemId]) {
      deleteHeart(userId, hearts[itemId]);
    } else {
      postHeart(userId, { userId: userId, [itemKey]: itemId });
    }
  }

  render() {
    return (
      <button className={this.props.classStyle} onClick={this.handleClick}>
        {this.toggleHeart()}
      </button>
    );
  }
}

export default HeartButton;
