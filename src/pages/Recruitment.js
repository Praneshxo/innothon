import React from 'react';
import './Recruitment.css';
import Recprocess from './sub pages/Recprocess.js';

const Recruitment = () => {
  return (
    <div>
<div className="recruitment-container">
    <div className="title">
        <p>Recruitment</p>
        <button className="new">+ New Recruitment</button>
    </div>
    <div className="de">
        <p>Application Received<span className="val">567</span></p>
        <p>Vacancies<span className="val">500</span></p>
    </div>
</div>
<div className='job'>
  <div className='ll'>
  <p>Job List</p>
  <button className='link'>See More</button>
  </div>
  <div className='list'>
    <div className='vac'>Engineer
      <div className='ci'>20</div>
    </div>
    <div className='vac'>Quality Assurance
    <div className='ci'>30</div>
    </div>
    <div className='vac'>Production
    <div className='ci'>15</div>
    </div>
    <div className='vac'>It Support
    <div className='ci'>10</div>
    </div>
    <div className='vac'>Maintenance
    <div className='ci'>16</div>
    </div>
  </div>
</div>
   <Recprocess />

</div>


  );
};

export default Recruitment;
