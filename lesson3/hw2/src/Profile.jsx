import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import moment from 'moment';

const Profile = props => {
  return (
    <>
      <div className="profile__name">
        {props.firstName} {props.lastName}
      </div>
      <div className="profile__birth">
        Was born {moment(props.birthDate).format('D')} {moment(props.birthDate).format('MMM')}{' '}
        {moment(props.birthDate).format('YY')} in {props.birthPlace}
      </div>
    </>
  );
};

export default Profile;
