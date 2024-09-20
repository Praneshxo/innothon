import React from 'react';
import './ShiftSchedule.css';

const ShiftSchedule = () => {
  return (
    <div className="shift-schedule-container">
      <h2>Shift Schedule</h2>
      <div className="shift-schedule-container">
      <div className="shift-header">
        <div className="top-container">
          <h2 className="view-report">View Report</h2>
          <div className="right-controls">
            <h2 className="overall">Overall</h2>
            <div className="shift-types">
              <button>Day 2500</button>
              <button>M.Shift 1000</button>
              <button>Night 1000</button>
            </div>
          </div>
        </div>
        </div>
        <div className="bottom-container">
          <div className="shift-controls-left">
            <button className="overtime">Over Time</button>
            <button className="swap">Swap</button>
            <button className="add-btn">+</button>
          </div>
        </div>
        </div>
      <div className="sectors">
        <button>Quality Assurance</button>
        <button>Engineering</button>
        <button>Maintenance</button>
        <button>Safety and Compliance</button>
        <button>Finance and Administration</button>
      </div>

      <div className="shift-info">
        <button>Day:50</button>
        <button>M.Shift:25</button>
        <button>Night:25</button>
      </div>

      <table className="shift-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>E.ID</th>
            <th>Work</th>
            <th>OT Avail</th>
            <th>OT Status</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {[
            { sno: 1, name: 'John', eid: 'Hm001', work: '8 hrs', otAvail: '4 hrs', status: 'Approved', reason: 'High Work' },
            { sno: 2, name: 'Mark', eid: 'Cj001', work: '8 hrs', otAvail: '4 hrs', status: 'Approved', reason: 'High Work' },
            { sno: 3, name: 'Arun', eid: 'MK001', work: '6 hrs', otAvail: '4 hrs', status: 'Approved', reason: 'High Work' },
            { sno: 4, name: 'Jesu', eid: 'ln001', work: '8 hrs', otAvail: '4 hrs', status: 'Approved', reason: 'High Work' },
            { sno: 5, name: 'Mathew', eid: 'pj001', work: '8 hrs', otAvail: '4 hrs', status: 'Approved', reason: 'High Work' },
            { sno: 6, name: 'Kay', eid: 'ma001', work: '6 hrs', otAvail: '4 hrs', status: 'Approved', reason: 'High Work' },
            { sno: 7, name: 'Kim', eid: '0dh01', work: '8 hrs', otAvail: '3 hrs', status: 'Approved', reason: 'High Work' },
            { sno: 8, name: 'Raj', eid: 'qw001', work: '8 hrs', otAvail: '4 hrs', status: 'Approved', reason: 'High Work' },
            { sno: 9, name: 'Dhinesh', eid: 'pj001', work: '5 hrs', otAvail: '4 hrs', status: 'Approved', reason: 'High Work' },
          ].map((row, idx) => (
            <tr key={idx}>
              <td>{row.sno}</td>
              <td>{row.name}</td>
              <td>{row.eid}</td>
              <td>{row.work}</td>
              <td>{row.otAvail}</td>
              <td>{row.status}</td>
              <td>{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShiftSchedule;
