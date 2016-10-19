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
    const data = [
      {
        name: 'Christian Kitty',
        title: 'Senior Executive Advisor'
      },
      {
        name: 'Julia Kitty',
        title: 'Kitty'
      },
      {
        name: 'Cow Kitty',
        title: 'Cow'
      },
      {
        name: 'Bunny Kitty',
        title: 'Bunny'
      }
    ];

    const peopleElements = _.map(data, (person, index) => {
      return (
        <div
          key={ `personElem-${index}` }
          className="person__wrapper"
        >
          <h1>
            { person.name }
          </h1>
          <h3>
            { person.title }
          </h3>
        </div>
      );
    });

    return (
      <div className="page page--about">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Home
        </h1>
        <div className="repeating">
          { peopleElements }
        </div>
      </div>
    );
  }
}
