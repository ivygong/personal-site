import React from 'react';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.propTypes.any
    }
  },

  render () {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
});
