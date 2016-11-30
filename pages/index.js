import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    return (
      <div className="page page--about">
        <Helmet
          title={config.siteTitle}
        />
        <div className="home__content">
          <div className="home__title">
            Welcome!
          </div>
        </div>
      </div>
    );
  }
}
