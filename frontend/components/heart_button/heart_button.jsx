import React from 'react';
import { connect } from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export const HeartButton = (props) => {
  console.log('heart', props);
  return (
    <button>
      <FaRegHeart />
    </button>
  );
};
