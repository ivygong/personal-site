import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Portfolio extends Component {
  render () {
    const data = [
      {
        name: 'Pharmapace',
        link: 'pharmapace.com',
        website: 'http://www.pharmapace.com/',
        imgurl: '/img/portfolio-pharmapace.jpg',
        summary: 'TEMP'
      },
      {
        name: 'A Week in the Wizarding World',
        link: 'hpsummercamp.com',
        website: 'http://www.hpsummercamp.com/',
        imgurl: '/img/portfolio-hp.jpg',
        summary: 'A Week in the Wizarding World is a summer camp program for fourth and fifth graders. Students get to experience the magic of Harry Potter with a large variety of themed activities, including House Sorting, Butterbeer, and the End of the Year Feast. There were two important aspects to emphasize here: the unfortunately necessary practicalities and the magic of Harry Potter. Complicated processes like registration became streamlined with simple online forms on the Register Now page. The wonder of the HP world wasn’t lost though; sliders and graphics allowed for plenty of visuals that conveyed the fun side of the camp.'
      },
      {
        name: 'Hamilton College Consulting',
        link: 'hamiltoncollegeconsulting.com',
        website: 'http://www.hamiltoncollegeconsulting.com/',
        imgurl: '/img/portfolio-hcc.jpg',
        summary:'For Christopher Hamilton and the HCC team, education is not a business — it is a calling. Offering highly personalized counseling and inspiring teaching methods focused on building foundational skills, Hamilton College Consulting endeavors to inspire more critical and innovative thinkers. At Ermana, we wanted to make sure that HCC’s student-first commitment was reflected in their website. Features like the voices page ensured that no one could mistake HCC for another education company interested only in test scores and statistics.' 
      },
      {
        name: 'San Diego World Affairs Council',
        link: 'sdwac.org',
        website: 'http://sdwac.org/',
        imgurl: '/img/portfolio-sdwac.jpg',
        summary:'The San Diego World Affairs Council (SDWAC) was founded in 1954. SDWAC is part of the World Affairs Councils of America, the largest international affairs non-profit organization in the United States. In addition, we have a North County Chapter serving that area and through our combined efforts we serve over three hundred members. SDWAC promotes interest and dialogue throughout the San Diego community in international relations and world affairs. Because SDWAC is a non-profit that tries to promote discussion of relevant issues in San Diego, it holds events very often. We implemented a modern, extremely functional calendar to highlight that, in addition to creating an entire events section.'
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
              <a href={person.website} target="_blank">              
                <div className="portfolio__imgwrapper">
                  <img src={ prefixLink(`${person.imgurl}`) }/>
                  <div className="img__box"></div>
                  <div className="img__label">{person.link}</div>                  
                </div>
              </a>
            </div>

            <div className="col col--2">
              <div className="col--2__title">
                <a href={person.website} target="_blank">{person.name}</a>
              </div>
              <div className="col--2__section">
                { person.summary}
              </div>
            </div>
          </div>

        </div>
      );
    });

    return (
      <div className="page page--portfolio">
        <Helmet
          title={config.siteTitle}
        />
        <div className="portfolio__content">
          <div className="portfolio__title">Portfolio</div>
          <div className="portfolio__body">
            <div className="repeating">
            { peopleElements }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
