import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Portfolio extends Component {
  render () {
    return (
      <div className="page page--portfolio">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          About
        </h1>
      </div>
    );
  }
}
