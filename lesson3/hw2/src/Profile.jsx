import React from 'react';
import './index.scss';
import moment from 'moment';

const birthData = date => {
  return moment(new Date(date)).format('DD MMM YY');
};

const Profile = props => {
  return (
    <>
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">{`Was born ${birthData(props.userData.birthDate)} in ${
        props.userData.birthPlace
      }`}</div>
    </>
  );
};

export default Profile;
