import React from 'react';
import './OtherProjects.scss';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OtherProjects() {
  return (
    <div className="other_projects" id="other_projects">

    <div className="other_projects-content section-content">

     <h2 className="h3 section-title">Other Noteworthy Projects</h2>

      {/* <p className="section-text">
        I develop simple, intuitive and responsive applications that helps users get things done with less effort
        and time.
      </p> */}



      <div className="container">
        <div className="other_projects_row">
            
            


          <div className="other_project_item" data-aos="fade-up">
            <div className="icon"> <FontAwesomeIcon icon={faStar} /></div>
            <h4 className="title"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.professionalcipher.stickers.drgulatistickers"  rel='noreferrer' >  
WhatsApp Stickes App</a></h4>
            <p className="description">Dr. Mashoor Gulati Stickers for WhatsApp - Sticker</p>
          </div>

           <div className="other_project_item" data-aos="fade-up">
           <div className="icon"> <FontAwesomeIcon icon={faStar} /></div>
            <h4 className="title"><a target="_blank" href="https://github.com/pranavelric/Fake_News_detection" rel='noreferrer'>    
            Fake News Detection</a></h4>
            <p className="description">Machine learning Project, which uses logistic regression and SVM method to classify the news into FAKE/REAL, on the basis of their Title and Body-Content.</p>
          </div>

       <div className="other_project_item" data-aos="fade-up">
       <div className="icon"> <FontAwesomeIcon icon={faStar} /></div>
            <h4 className="title"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.professionalcipher.whatsappstatusdownloader"  rel='noreferrer'>    
WhatsApp Status downloader</a></h4>
            <p className="description">Status viewer and downloader for android</p>
          </div>



          <div className="other_project_item" data-aos="fade-up">
          <div className="icon"> <FontAwesomeIcon icon={faStar} /></div>
            <h4 className="title"><a  target="_blank" href="https://github.com/pranavelric/Design_Project"></a>Rain Protector for motorbikes</h4>
            <p className="description">A suitable solution for two-wheeler riders facing problems in rainy season.</p>
          </div>

          <div className="other_project_item" data-aos="fade-up">
          <div className="icon"> <FontAwesomeIcon icon={faStar} /></div>
            <h4 className="title"><a target="_blank" href="https://github.com/pranavelric/Flappy">Flappy bird</a></h4>
            <p className="description">Flappy bird game build in python using pygame </p>
          </div>
          <div className="other_project_item" data-aos="fade-up" data-aos-delay="100">
          <div className="icon"> <FontAwesomeIcon icon={faStar} /></div>
            <h4 className="title"><a  target="_blank"href="https://github.com/pranavelric/Club-management-System">College Club Management
                Website</a></h4>
            <p className="description">Website to manage college clubs with database to add and modify members of different
              clubs.</p>
          </div>
       
          <div className="other_project_item" data-aos="fade-up" data-aos-delay="300">
          <div className="icon"> <FontAwesomeIcon icon={faStar} /></div>
            <h4 className="title"><a target="_blank" href="https://github.com/pranavelric/TicTacToe">TIC_TAC_TOE</a></h4>
            <p className="description">A simple Mobile game made in flutter</p>
          </div>
          <div className="other_project_item" data-aos="fade-up" data-aos-delay="300">
          <div className="icon"> <FontAwesomeIcon icon={faStar} /></div>
            <h4 className="title"><a  target="_blank" href="https://github.com/pranavelric/RentalGo">Rental GO</a></h4>
            <p className="description">A website which would allow users to put up ads and others to take those things on
              rent.</p>
          </div>


        </div>

      </div>










    </div>


  </div>
  )
}
