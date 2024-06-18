import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="October 2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Platform Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Pickles Auction, Malaysia</h4>
            <p>
              Dynatrace, AWS, Azure, Kubernetes, Helm, Kong Gateway, Terraform, Bash, Powershell, Github, Azure Devops
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2022 - September 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud DevOps Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Dygisec, LK</h4>
            <p>
              Docker, Kubernetes, AWS, Azure, Jenkins, CloudFormation, Bash, Powershell, Github, Prometheus
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2021 - April 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Swivel Tech, LK</h4>
            <p>
              Docker, Github Actions, AWS, AWS CodePipeline, Nginx, New Relic, CircleCI, Prometheus, Grafana, Amazon ECS, Azure DevOps
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2018 - October 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Consultant Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Virtusa, LK</h4>
            <p>
              Office 365 Administration, Azure, AWS, Powershell, Bash, CI/CD, Jenkins, CloudFormation, Active Directory
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2017 - September 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Implementation Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Duo Software, LK</h4>
            <p>
              Google Cloud Platform, Github, Nagios, Docker, HAProxy, Jira, Confluence, Microsoft SQL Server, Prometheus, MongoDB, Linux, Couch DB
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2013 - March 2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Implementation Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Duo Software, LK</h4>
            <p>
              PHP, MYSQL, Docker, Nginx, CICD Pipeline, Sonarqube, Onsite Support, 3rd Party Integration, User Training
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2012 - September 2013"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Application Support Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">IPOSG, LK</h4>
            <p>
              Application and Customer support, Customer Relationships, Troubleshooting
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2012 - December 2012"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Content Generator</h3>
            <h4 className="vertical-timeline-element-subtitle">Connect Lanka, LK</h4>
            <p>
              Visually impactful content, User Experience, Proofreading, Publishing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;