// src/pages/Dashboard.js
import React from 'react';
import './Request.css';
import DataTable from './DataTable';
import StarRating from './StarRating'; 

const Request = () => {
  return (
    <div>
        <p>Request</p>
        <div className='list'>
          <div className='Payroll'>Payroll</div>
          <div className='Leave'>Leave</div>
          <div className='Shift-change'>Shift change</div>
          <div className='Policy'>Policy</div>
        </div>
        <p>Pending</p>
         <div className='AR'>
           <div className='approve'>Approved</div>
           <div className='rej'>Rejected</div>
         </div>
         <div className='form'>
         <div className="table-container">
                <DataTable />
            </div>
         </div>
         <div className='feed'>
          <p>Feedback</p>
          <div className='star'>
            <StarRating />
          </div>

         </div>
    </div>
  );
};

export default Request;
