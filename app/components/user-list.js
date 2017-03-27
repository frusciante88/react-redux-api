import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.users.map(user => {

        return (
          <div key={user.id} className="data-list-item">
            <div className="details">
              <span>{user.name}</span>
            </div>            
          </div>
        );

      })}

    </div>
  );
}