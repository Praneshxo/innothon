import React from 'react';
import './Payroll.css'; // Importing CSS for styling

const Payroll = () => {
  return (
    <div className="main-content">
      <div className="phmain">
        {/* Upcoming Payments Section */}
        <div className="upcoming-payments">
          <h2>Upcoming Payments</h2>
          <div className="payments-list">
            {[
              { description: 'Sector 1', dueDate: 'Sep 30' },
              { description: 'Sector 2', dueDate: 'Oct 2' },
              { description: 'Contractor', dueDate: 'Oct 11' },
              { description: 'IT Team', dueDate: 'Oct 20' },
            ].map((payment, index) => (
              <div key={index} className="payment-item">
                <span className="description">{payment.description}</span>
                <span className="due-date">{payment.dueDate}</span>
                <button className="proceed-button">Proceed</button>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Report Section */}
        <div className="jilo">
          <div className="report-container">
            <div className="report-top">
              <h2>Revenue Report</h2>
              <div className="report-details">
                <div className="report-item">
                  <span>Turn over</span>
                  <span>52,520,000</span>
                </div>
                <div className="report-item">
                  <span>Expansion</span>
                  <span>36,600,000</span>
                </div>
                <div className="report-item">
                  <span>Tax Deduction</span>
                  <span>13,200,000</span>
                </div>
              </div>
            </div>

            <div className="payment-summary">
              <div className="summary-item">
                <span>Payments Done</span>
                <span>12,400,000</span>
              </div>
              <div className="summary-item">
                <span>Pending</span>
                <span>1,200,000</span>
              </div>
              <div className="summary-item">
                <span>On Process</span>
                <span>20,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="create-payroll">+ Create Payroll</button>
        <button className="bonus">Bonus</button>
        <button className="view-reports">View Reports</button>
      </div>

      {/* Payment History Section */}
      <div className="payment-history">
        <h2>Payment History</h2>
        <table>
          <thead>
            <tr>
              <th>Payroll Description</th>
              <th>Amount</th>
              <th>Paid at</th>
              <th>Status</th>
              <th>Breakdown</th>
            </tr>
          </thead>
          <tbody>
            {[
              { description: 'Contractor Pay', amount: '1,20,000', date: 'Aug 21', status: 'Paid' },
              { description: 'Aguards Payment', amount: '1,20,000', date: 'Aug 21', status: 'Pending' },
              { description: 'Sector Payment', amount: '1,20,000', date: 'Aug 21', status: 'Paid' },
              { description: 'Maintenance', amount: '1,20,000', date: 'Aug 21', status: 'Paid' },
            ].map((payment, index) => (
              <tr key={index}>
                <td>{payment.description}</td>
                <td>{payment.amount}</td>
                <td>{payment.date}</td>
                <td className={payment.status === 'Pending' ? 'pending' : 'paid'}>{payment.status}</td>
                <td><button className="view-data">View Data</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="export-button">EXPORT</button>
      </div>
    </div>
  );
};

export default Payroll;