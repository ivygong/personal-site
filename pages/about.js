import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class About extends Component {
  render () {
    return (
      <div className="page page--about">
        <Helmet
          title={config.siteTitle}
        />
        <div className="about__content">
          <div className="about__title">
            About
          </div>
          <div className="about__section">
            <div className="about__image">
              <img src={prefixLink('/img/aboutpicture.jpg')}/>
            </div>
            <div className="about__summary">Hi. I'm Ivy.</div>
          </div>
        </div>
      </div>
    );
  }
}
