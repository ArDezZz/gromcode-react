import React from 'react';

import './index.scss';

const Greeting = props => {
  let currentYear = new Date().getFullYear();
  let personBirthdate = props.birthDate.getFullYear();
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {currentYear - personBirthdate} years old
    </div>
  );
};

export default Greeting;
