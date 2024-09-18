// src/pages/Dashboard.js
import React from 'react';
import './ShiftSchedule.css';

const ShiftSchedule = () => {
  return (
    <div>
      <div>
        <p>Shift Schedule</p>
        <div className='oreport ShiftSchedule'>
          <div className='title ShiftSchedule'>
            <p>Overall</p>
            <p className='link'>View Report</p>
          </div>
          <div className='vacc'>
              <div className='vac-ShiftSchedule'><p>Night</p> 1000</div>
              <div className='vac-ShiftSchedule'><p>Mid Shift</p> 1000</div>
              <div className='vac-ShiftSchedule'><p>Day</p>2500</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftSchedule;
