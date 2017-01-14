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
          <div className="about__body">
            <div className="about__section">
              <div className="about__image">
                <img src={prefixLink('/img/aboutpicture.jpg')}/>
              </div>
              <div className="about__summary">Hi. I'm Ivy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              <div className="about__links">
                <a href={prefixLink('/pdf/resume.pdf')} target="_blank">
                  <div className="about__link--block">
                    Resume
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/ivy-gong-802816132" target="_blank">
                  <div className="about__link--block">
                    LinkedIn
                  </div>
                </a>
                <a href="www.google.com">
                  <div className="about__link--block">
                    Email
                  </div>
                </a>
                <a href="https://github.com/ivygong" target="_blank">
                  <div className="about__link--block">
                    Github
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
