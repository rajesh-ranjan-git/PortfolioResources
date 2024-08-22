import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { ExpCard } from '../../components/ExpCard/Cards'
import HomeContent from '../HomeContent/HomeContent'
import { Helmet } from 'react-helmet';
import './Experience.scss';
export default function Experience() {
  return (
    <HomeContent id='experience' class='experience'>

      {/* <Helmet>
        <title>Experience | Pranav Choudhary</title>
        <meta name="description" content="Explore Pranav Choudhary's software development experience, including roles at Cradlepoint, Cloudlex, and more. Discover my skills in Django, Spring, Angular, and other web technologies." />
      </Helmet> */}

      <h2 className="h3 section-title">Experience</h2>
      {/* <ExpCard  role='' period='' company='' location='' tech_stack='' data=''/> */}
      <Fade direction='bottom' duration={2000} triggerOnce>
        <div className="timeline">
        <div className="timeline_container right">
            <div className="content">
              <ExpCard role='SDE II' img_path='./assets/comp/cp.jpeg' period='Apr 2024 - Present' company='Cradlepoint, part of Ericsson' data={['Secured Remote Connect by identifying and resolving critical CVEs, ensuring a robust and secure user experience.', 'Diligently addressed a range of project\'s bugs and escalations, significantly enhancing system stability and reliability.', 'Handling the day to day issues and fine tuning the applications for enhanced performance.', 'Tech Stack: - Django, Django Rest Framework, Docker, Kubernetes, Aws, Redis, kafka, Terraform, Hashicorp Packer, Vagrant.']} />
            </div>

          </div>
          <div className="timeline_container left">
            <div className="content">
              <ExpCard role='SDE I' img_path='./assets/comp/cp.jpeg' period='Jun 2022 - Mar 2024' company='Cradlepoint' data={['Led and contributed to various critical projects enhancing the company’s product offerings.','Developed an interactive web application for configuration, monitoring and tasks.', 'Contributed to multiple stages of the product cycle including building database models, API interfaces and views utilizing Django.', 'Integrated 3rd party APIs and built new backend APIs.', 'Handling the day to day issues and fine tuning the applications for enhanced performance.', 'Tech Stack: - Django, Django Rest Framework, Docker, Kubernetes, Aws, Redis, Hashicorp Packer, Vagrant.']} />
            </div>

          </div>

          <div className="timeline_container right">
            <div className="content">
              <ExpCard role='SDE intern' img_path='./assets/comp/cradlepoint.png' company='Cradlepoint' period='Jan 2022 - Jun 2022' data={['Developed an interactive web application for configuration, monitoring and tasks.', 'Contributed to multiple stages of the product cycle including building database models, API interfaces and views utilizing Django.', 'Integrated 3rd party APIs and built new backend APIs.', 'Added speedtest routes for traffic steering policy, fixed CRON job issues.', 'Provided filtering support in query params, added schema validation for several configs.', 'TDD, wrote unit tests and fixed OS command injection vulnerability.', 'Handling the day to day issues and fine tuning the applications for enhanced performance.', 'Tech Stack: - Django, Django Rest Framework, Docker, Kubernetes, Aws.']} />

            </div>
          </div>

          <div className="timeline_container left">
            <div className="content">
              <ExpCard role='SDE intern' img_path='./assets/comp/cloudlex.jpeg' company='Cloudlex inc' period='May 2021 - Dec 2021' data={['Created end to end automated tests, performed functional testing for Templates module.', 'Created forms for template module in Angular.', 'Perform elaborate functional testing for the Templates module.', 'Document test cases and performed peer reviews on the teammate’s work.', 'Contributed to REST API development to generate the templates with the data available in the system for law firms.', 'Collaborated with the Frontend team and Testing team to meet client\'s needs before the deadline.', 'Assisted in project planning, writing quality code, and providing timely issue resolutions.', 'Automated the process of generating legal documents for various Law firms', 'Tech Stack: - Java, Spring, Angular Js.']} />

            </div>
          </div>
          <div className="timeline_container right">
            <div className="content">
              <ExpCard role='Fusion IIIT - ERP' img_path='./assets/comp/iiit_c.jpg' period='Jan 2021 - Aug 2021' company='IIIT Jabalpur' data={['Developed and managed various utility Modules', 'Designed and Built the Employee Database module, it is a platform where Employees of IIIT J can view and edit their data.', 'Tech Stack: - Django, HTML, CSS, Javascript, Postgres.']} />
            </div>
          </div>
          <div className="timeline_container left">
            <div className="content">
              <ExpCard role='Android Developer' img_path='./assets/comp/pc.jpeg' period='Dec 2020 - Jan 2021' company='Professional Cipher' data={['Involved in all stages of the product cycle - design, development, testing and deployment.', 'Developed some apps like WhatsApp Status Downloader, Edu-free, WhatsApp Stickers.', 'Developed mobile applications tailored to client requirements utilising native technologies.', 'Created app documentation that provided all pertinent information, including features, capabilities and benefits.', 'Tech Stack: - Java, kotlin, MYSQL, Firebase']} />
            </div>
          </div>
        </div>
      </Fade>
    </HomeContent>
  )
}
