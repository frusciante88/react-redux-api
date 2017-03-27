import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>      
      <main>
        {props.children}
      </main>
    </div>
    );
}
