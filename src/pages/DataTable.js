import React from 'react';
import './DataTable.css'; // Optional: for styling

const DataTable = () => {
    const data = [
        { id: 'HX4J11', name: 'Jobert', submitted: 'Sep 15', description: 'Overtime' },
        { id: 'RXE1R45', name: 'John', submitted: 'Sep 15', description: 'Salary' },
        { id: 'MA414', name: 'Albert', submitted: 'Sep 15', description: 'Weekoff' },
    ];

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Submitted</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.submitted}</td>
                        <td>{item.description}</td>
                        <td>
                            <p className='vi'>View</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
