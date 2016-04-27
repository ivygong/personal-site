import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import $ from 'jquery';

import 'css/_index.scss';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  componentDidMount() {},

  render () {
    return (
      <div className="root">
        <div className="nav"></div>
        <div
          style={{
            padding: 0
          }}
        >
          { this.props.children }
        </div>
      </div>
    )
  },
})
