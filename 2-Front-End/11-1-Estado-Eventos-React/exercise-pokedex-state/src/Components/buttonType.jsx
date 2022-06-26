import React from 'react';
import PropTypes from 'prop-types';

class ButtonStyles extends React.Component {
  render() {
    const { type, click } = this.props;

    return (
      <button type="button" key={ type } onClick={ click }>{ type }</button>
    );
  }
}

ButtonStyles.propTypes = {
  type: PropTypes.string,
  click: PropTypes.func,
}.isRequired;

export default ButtonStyles;
