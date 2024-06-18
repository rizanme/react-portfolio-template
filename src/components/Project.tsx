import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Accomplishments</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.dynatrace.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.dynatrace.com" target="_blank" rel="noreferrer"><h2>Dynatrace Migration</h2></a>
                <p>Integrating Dynatrace for comprehensive end-to-end observability across multiple projects. This involved setting up dashboards, alerts, and SLOs. In addition to ingesting logs, metrics, and traces with OneAgent, injected the custom logs through OpenTelemetry Protocol (OTLP) exporter.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Optimizing Infrastructure Cost</h2></a>
                <p>Optimizing cloud infrastructure for cost efficiency, leveraging my expertise to meticulously analyze and implement strategic adjustments. This approach ensures the reduction of cloud expenses without compromising on performance or scalability, delivering significant cost savings for organizations.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Maintain and Upgrade</h2></a>
                <p>Regularly performe upgrades of Kubernetes clusters and rest of the managed services, ensuring they were always running on the most recent LTS and secure versions. This process also included updating critical dependencies such as the NGINX Ingress Controller and Kong Proxy.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Infrastructure as Code</h2></a>
                <p>leveraging Infrastructure as Code (IaC) methodologies to automate and manage complex cloud infrastructures efficiently. Proficient in defining and deploying scalable, highly available, and fault-tolerant systems using leading IaC tools such as Terraform, Ansible, and CloudFormation. Demonstrated ability to reduce manual configuration errors and ensure consistent environments across development, testing, and production, significantly enhancing operational reliability and speed of deployment.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Code Quality</h2></a>
                <p> Integrated SonarCloud for code quality control and Dependabot for proactive security vulnerability detection in the codebase, packages, and git action across the repository.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>CICD Pipeline</h2></a>
                <p>Standardizing and optimizing CI/CD pipelines by transitioning to a template-based approach and served through a centralized repository. This strategic initiative empowered developers to adopt and integrate CI/CD pipelines for new services independently.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Security 1st</h2></a>
                <p>As a Platform Engineer with a 'Security First' approach, I prioritize the implementation of robust security measures in cloud environments from the outset. This involves architecting cloud infrastructures with built-in security protocols, such as identity and access management, encryption, network security, and compliance standards. By integrating security practices at every layer of the cloud stack, I ensure the protection of sensitive data and the resilience of cloud services against emerging threats, thereby maintaining trust and integrity in cloud-based platforms.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Automation</h2></a>
                <p>In my role as a Platform Engineer, I have championed the automation of cloud operations, streamlining the deployment, scaling, and management of applications and services. By implementing tools such as Jenkins, Ansible, and Kubernetes, I have enabled seamless, automated workflows that enhance productivity, reduce human error, and ensure consistent, reliable environments. This focus on automation not only accelerates development cycles but also supports a robust, secure, and efficient cloud infrastructure.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;