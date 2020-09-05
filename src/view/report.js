import React from 'react';
import { Link } from 'react-router-dom';

function Report() {
  return (
      <div className="contents">
          <h1>Reports</h1>

          <p>Here is a list of the report of different week and more will be added as we progress.</p>
          
          <ul>
              <li><Link to='/reports/week/1'>Week 1</Link></li>
          </ul>
      </div>
  );
}

export default Report;
