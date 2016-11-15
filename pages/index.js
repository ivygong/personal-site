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
        name: 'San Diego World Affairs Council',
        title: 'http://sdwac.org/',
        url: '/img/hcc-portfolio.jpg'
      },
      {
        name: 'Hamilton College Consulting',
        title: 'http://www.hamiltoncollegeconsulting.com/'
      },
      {
        name: 'A Week in the Wizarding World',
        title: 'http://www.hpsummercamp.com/'
      }
    ];

    const peopleElements = _.map(data, (person, index) => {
      return (
        <div
          key={ `personElem-${index}` }
          className="person__wrapper"
        >
          <div className="col">
            <div className="col col--1">
            <h1>
              { person.name }
            </h1>
            </div>

            <div className="col col--2">
            <h3>
              { person.title }
            </h3>
            </div>
          </div>

        </div>
      );
    });

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
        <div className="repeating">
          { peopleElements }
        </div>
      </div>
    );
  }
}
