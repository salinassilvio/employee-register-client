import React from 'react'
import Employee from './Employee';

export default function EmployeeList() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Employee Register</h1>              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Employee></Employee>
        </div>
        <div className="col-md-8">
          <div>Employee Register</div>
        </div>
      </div>
    );
}
